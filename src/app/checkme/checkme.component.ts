import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { person } from "../classes/person";

@Component({
  selector: 'app-check-me',
  templateUrl: './checkme.component.html',
  styleUrls: ['./checkme.component.css']
})
export class checkmeComponent {
  showData : boolean;
  errorMessage : string;
  eid : string;
  person = new person();


  constructor(public rest: RestService) {
    this.showData = false;
   }


  onClickMe() {
    this.getPerson();
  }

  getPerson() {
    console.log(this.eid);
    this.rest.getPerson(this.eid).subscribe(res => {
      //show user found popup  
      this.person = res;  
      this.showData = true;
      this.errorMessage = "";

    }, (err) => {
      if (err.status == 404)
        console.log("User not found!");
      this.errorMessage = "Person not found !";
      this.person = new person();
      this.showData = false;
    }
    );
  }

}