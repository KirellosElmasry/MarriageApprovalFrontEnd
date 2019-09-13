import { Component, OnInit, Input} from '@angular/core';
import { person } from "../classes/person";

@Component({
  selector: 'app-secondclearance',
  templateUrl: './secondclearance.component.html',
  styleUrls: ['./secondclearance.component.css']
})
export class SecondclearanceComponent implements OnInit {

  personData: person;

  constructor() { }

  ngOnInit() {
    this.personData = history.state.data
    console.log("data "+this.personData.referenceNumber);
  }

}
