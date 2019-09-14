import { Component, OnInit } from '@angular/core';
import { person } from "../classes/person";
import { RestService } from '../rest.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {

  personData = new person();
  submitEnabled : boolean  = true;
  constructor(public rest: RestService) { }

  ngOnInit() {
    this.personData.emirateId =  history.state.eid;
  }
  /**
   * save
   */
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
