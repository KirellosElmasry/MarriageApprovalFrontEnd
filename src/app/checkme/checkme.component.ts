import { Component } from '@angular/core';
import { RestService } from '../rest.service';
import { person } from "../utils/person";
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-me',
  templateUrl: './checkme.component.html',
  styleUrls: ['./checkme.component.css'],

})
export class checkmeComponent {

  role = sessionStorage.getItem('role');

  showData: boolean;
  userNotFound: number;
  eid: string;
  person = new person();
  showSpinner : boolean = false;

  constructor(public rest: RestService, private router: Router) {
    this.showData = false;
    this.userNotFound = 0;
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
      if (!this.person.emirateId) {
        console.log("User not found!");
        this.userNotFound = 1;
        this.person = new person();
        this.showData = false;
      } else {
        this.showData = true;
        this.userNotFound = 0;
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
}
