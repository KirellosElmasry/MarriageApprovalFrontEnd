import { Component, OnInit } from '@angular/core';
import { person } from "../classes/person";
import { RestService } from '../rest.service';

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
  submitEnabled : boolean  = true;

  militaryStatus: Status[] = [
    {value: '0', viewValueEN: 'Finished', viewValueAR: 'اتم الخدمه'},
    {value: '1', viewValueEN: 'postponed', viewValueAR: 'تأجيل'},
    {value: '2', viewValueEN: 'Exemption', viewValueAR: 'اعفاء'}
  ];

  maritalStatus: Status[] = [
    {value: '1', viewValueEN: 'Single', viewValueAR: 'اعزب'},
    {value: '2', viewValueEN: 'divorcee', viewValueAR: 'مطلق'},
    {value: '3', viewValueEN: 'Widowed', viewValueAR: 'ارمل'}
  ];

  constructor(public rest: RestService) { }

  ngOnInit() {
    this.personData.emirateId =  history.state.eid;
  }
  /**
   * save
   */
  public TestSave() {
    console.log("maritalStatus " + this.personData.maritalStatus);
    console.log("marriageType " + this.personData.marriageType);
    console.log("foreignCountryDate " + this.personData.foreignCountryDate);
    console.log("militaryStatus " + this.personData.militaryStatus);
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

    console.log("emirateId " + this.personData.emirateId);
    this.rest.savePerson(this.personData).subscribe(
      data => {

        console.log("save person subscribe " + data);
        if(data){
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
}
