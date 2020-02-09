import { Component, OnInit, Input } from '@angular/core';
import { person } from "../utils/person";
import { SecondClearanceService } from '../services/second-clearance.service';
import { SecondClearance } from '../utils/SecondClearance';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-secondclearance',
  templateUrl: './secondclearance.component.html',
  styleUrls: ['./secondclearance.component.css']
})
export class SecondclearanceComponent implements OnInit {

  personData: person;

  secondClearance = new SecondClearance();
  constructor(public secondClearanceService: SecondClearanceService, public personService: RestService) {

  }

  ngOnInit() {
    this.personData = history.state.data;
    console.log("eid " + this.personData.emirateId);
  }

  save() {

    console.log("emiratesid " + this.personData.emirateId);
    if (this.secondClearance.secondClearanceDate) this.secondClearance.secondClearanceDate.setHours(4);
    this.secondClearance.referenceNumber = this.personData.referenceNumber;
    if (this.secondClearance.referenceNumber) {
      this.secondClearance.emiratesId = this.personData.emirateId;
      this.secondClearanceService.saveSecondClearance(this.secondClearance).subscribe(
        data => {
          if (data) {
            console.log(" success save Second Clearance " + data);
            //show success message then clear form
            // update person set hassecondclearance yes
            this.personData.hasSecondClearance = "yes";

            this.personService.updatePerson(this.personData).subscribe(
              data => {

                if (data) {
                  console.log(" success update person data " + data);
                  alert("Data updated successfully.")
                  //show success message then clear form 
                  this.personData = new person();
                  this.secondClearance = new SecondClearance();
                }
              }, (err) => {
                console.log("Error " + err.status);
                alert("Error happened when saving data ")
              }
            );

          }
        }, (err) => {
          console.log("Error " + err.status);
          alert("Error happened when saving data ")
        }
      );
    }else{
      alert("Error no reference number ")
    }
  }
}
