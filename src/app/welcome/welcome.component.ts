import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /**
   * checkperson
   */
  public checkperson() {
    this.router.navigate(['checkme']);   
  }

  public newPerson() {
    this.router.navigate(['newperson']);   
  }
}
