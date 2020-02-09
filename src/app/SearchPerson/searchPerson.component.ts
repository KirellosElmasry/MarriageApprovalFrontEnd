import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { person } from "../utils/person";
import { Router } from '@angular/router';
import { SecondClearanceService } from '../services/second-clearance.service';
import { SecondClearance } from '../utils/SecondClearance';

@Component({
  selector: 'app-searhPerson',
  templateUrl: './searchPerson.component.html',
  styleUrls: ['./searchPerson.component.css'],

})
export class searchPersonComponent {

  role = sessionStorage.getItem('role');

  showData: boolean;
  userNotFound: number;
  eid: string;
  person = new person();
  showSpinner : boolean = false;
  secondClearanceList : Array<SecondClearance>;
  currentDate = new Date ();
  name : string;
  constructor(public rest: RestService, private router: Router , public secondClearanceService: SecondClearanceService) {
    this.showData = false;
    this.userNotFound = 0;
  }

  searchForPerson(){
    console.log(this.name);
    console.log(this.eid);

    // now we get data using eid only we have to search with eid or name
    
    this.rest.getPerson(this.eid).subscribe(res => {
      this.showSpinner  = false;
      //show user found popup  
      this.person = res;
      console.log("res " + res);
      if (this.person.emirateId) {
        this.showData = true;
        this.userNotFound = 0;
        
        // //check for status
        // this.person.createdDate.setDate(this.person.createdDate.getDate() + 30);
        //  if(this.person.createdDate.getTime() > this.currentDate.getTime()){
        //    this.person.status = "expired";
        //  }

      } else {
        console.log("User not found!");
        this.userNotFound = 1;
        this.person = new person();
        this.showData = false;
      }
    }, (err) => {
      this.showSpinner  = false;
      if (err.status == 404)
        console.log("User not found!");
      this.userNotFound = 1;
      this.person = new person();
      this.showData = false;
    }

    );

  }
  fillSecondClearenceList() {
    this.secondClearanceService.getSecondClearanceByEid(this.person.emirateId).subscribe(
      data => {
        if (data) {          
          this.secondClearanceList = data;
          console.log(" success get Second Clearance " + this.secondClearanceList[0].engageDocNumber);
        }
      }, (err) => {
        console.log("Error " + err.status);
        alert("Error happened when get data ")
      }
    );
  }

  onClickMe() {
    this.getPerson();
  }

  getPerson() {
    console.log(this.eid);
    this.showSpinner  = true;
    this.rest.getPerson(this.eid).subscribe(res => {
      this.showSpinner  = false;
      //show user found popup  
      this.person = res;
      console.log("res " + res);
      if (this.person.emirateId) {
        this.showData = true;
        this.userNotFound = 0;
        
        //check for status
        this.person.createdDate.setDate(this.person.createdDate.getDate() + 30);
         if(this.person.createdDate.getTime() > this.currentDate.getTime()){
           this.person.status = "expired";
         }
      } else {
        console.log("User not found!");
        this.userNotFound = 1;
        this.person = new person();
        this.showData = false;
      }
    }, (err) => {
      this.showSpinner  = false;
      if (err.status == 404)
        console.log("User not found!");
      this.userNotFound = 1;
      this.person = new person();
      this.showData = false;
    }
    );
  }

  public secondClearance() {
    this.router.navigate(['secondClearance'], { state: { data: this.person } });
  }

  public newDocument() {
    this.router.navigate(['newperson'], { state: { eid: this.eid } });
  }

  public showHistory(){
    console.log("in showHistory");
  }
}
