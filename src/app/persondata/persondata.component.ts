import { Component, OnInit , Input} from '@angular/core';
import { person } from "../classes/person";

@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent implements OnInit {
  
  @Input() personData: person;
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
