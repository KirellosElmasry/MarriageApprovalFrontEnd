import { Component, OnInit } from '@angular/core';
import { person } from "../classes/person";
import { RestService } from '../rest.service';

@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {

  personData = new person();

  constructor(public rest: RestService) { }

  ngOnInit() {
  }
/**
 * save
 */
public save() {

  this.personData.birthDate.setHours(4);
  this.personData.marriageApprovalDate.setHours(4);
  this.personData.caseDate.setHours(4);
  this.personData.widowhoodDate.setHours(4);  
  this.personData.civilMarriageDate.setHours(4);
  this.personData.foreignCountryDate.setHours(4);
  this.personData.baptismDate.setHours(4);

  this.rest.savePerson(this.personData).subscribe(
    data=>
    {
      
      console.log("save person subscribe "+ data );

    }, (err) => {
      console.log("Error "+err.status);
    }
  );
}
}
