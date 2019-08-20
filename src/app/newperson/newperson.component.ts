import { Component, OnInit } from '@angular/core';
import { person } from "../classes/person";

@Component({
  selector: 'app-newperson',
  templateUrl: './newperson.component.html',
  styleUrls: ['./newperson.component.css']
})
export class NewpersonComponent implements OnInit {

  personData = new person();

  constructor() { }

  ngOnInit() {
  }
/**
 * save
 */
public save() {
  console.log(this.personData.referenceNumber);  
}
}
