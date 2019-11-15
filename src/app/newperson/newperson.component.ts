import { Component, OnInit } from '@angular/core';
import { person } from "../utils/person";
import { RestService } from '../rest.service';
import { ConfigService } from "../services/config.service";
import { ConfigData } from '../utils/ConfigData';
import { DTO } from '../utils/DTO';
export interface Status {
  value: string;
  viewValueEN: string;
  viewValueAR: string;
}

@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {

  personData = new person();
  submitEnabled: boolean = true;
  configData: ConfigData;
  dto = new DTO;

  militaryStatus: Status[] = [
    { value: '0', viewValueEN: 'Finished', viewValueAR: 'اتم الخدمه' },
    { value: '1', viewValueEN: 'postponed', viewValueAR: 'تأجيل' },
    { value: '2', viewValueEN: 'Exemption', viewValueAR: 'اعفاء' },
    { value: '3', viewValueEN: 'Inappropriate', viewValueAR: 'غير لائق' }
  ];

  maritalStatus: Status[] = [
    { value: '1', viewValueEN: 'Single', viewValueAR: 'اعزب' },
    { value: '2', viewValueEN: 'divorcee', viewValueAR: 'مطلق' },
    { value: '3', viewValueEN: 'Widowed', viewValueAR: 'ارمل' }
  ];

  constructor(public rest: RestService, private configService: ConfigService) {
    this.getOldReferneceNumber();
  }

  ngOnInit() {
    this.personData.emirateId = history.state.eid;
  }

  /**
   * save
   */
  public TestSave() {
    this.generateReferenceNumber();
    console.log("this.personData.referenceNumber " + this.personData.referenceNumber);
  }

  public save() {

    this.submitEnabled = false;

    if (this.personData.birthDate) this.personData.birthDate.setHours(4);
    if (this.personData.marriageApprovalDate) this.personData.marriageApprovalDate.setHours(4);
    if (this.personData.caseDate) this.personData.caseDate.setHours(4);
    if (this.personData.widowhoodDate) this.personData.widowhoodDate.setHours(4);
    if (this.personData.civilMarriageDate) this.personData.civilMarriageDate.setHours(4);
    if (this.personData.foreignCountryDate) this.personData.foreignCountryDate.setHours(4);
    if (this.personData.baptismDate) this.personData.baptismDate.setHours(4);

    this.generateReferenceNumber();

    console.log("emirateId " + this.personData.emirateId);
    this.rest.savePerson(this.personData).subscribe(
      data => {

        console.log("save person subscribe " + data);
        if (data) {
          //show success message then clear form 
          alert("Data saved successfully.")
          this.personData = new person();
          this.submitEnabled = true;
        }
      }, (err) => {
        console.log("Error " + err.status);
        alert("Error happened when saving data " + err.status)
        this.submitEnabled = true;
      }
    );
  }

  private generateReferenceNumber() {

    var oldRefNumber = this.configData.lastRefeneceNumber;
    var newReferenceNumber: string;
    //get year from reference number and compare with year from date 
    var refYear = parseInt(oldRefNumber.substr(oldRefNumber.indexOf('/') + 1, 5));
    var refSequence = parseInt(oldRefNumber.substr(0, oldRefNumber.indexOf('/')));
    var currentYear = (new Date()).getFullYear();

    if (refYear === currentYear) {
      // add  1 to refSequence
      newReferenceNumber = refSequence + 1 + '/' + refYear;
    } else if (refYear === currentYear - 1) {
      newReferenceNumber = 1 + '/' + currentYear;
    }
    console.log("newReferenceNumber " + newReferenceNumber);
    this.personData.referenceNumber = newReferenceNumber;

    // update new referenceNumber in db
    this.updateRefeneceNumber(newReferenceNumber);
  }

  private updateRefeneceNumber(newReferenceNumber: string) {
    this.dto.configName = "lastRefeneceNumber";
    this.dto.configValue = newReferenceNumber
    this.configService.updateConfig(this.dto).subscribe(
      res => {
        // read last reference number from db
        this.configData = res
        console.log("in update configData ref" + this.configData.lastRefeneceNumber);
      },error => {
        console.log("error when updateReferneceNumber" );
      }
      ) 
  }

  private getOldReferneceNumber() {
    console.log("in getOldReferneceNumber" );
    this.configService.getConfig().subscribe(
      res => {
        // read last reference number from db
        this.configData = res
        console.log("configData ref" + this.configData.lastRefeneceNumber);
      },error => {
        console.log("error when getOldReferneceNumber" );
      }
      ) 
  }
}
