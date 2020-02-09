import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrls: ['./show-services.component.css']
})
export class ShowServicesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  public search() {
    this.router.navigate(['checkme']);   
  }

  public createNewApproval() {
    this.router.navigate(['newperson']);   
  }
}
