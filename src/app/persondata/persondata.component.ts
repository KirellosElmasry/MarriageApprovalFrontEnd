import { Component, OnInit, Input } from '@angular/core';
import { person } from "../classes/person";
import { RestService } from '../rest.service';

@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent implements OnInit {

  @Input() personData: person;
  selectedFile: File;
 
  constructor(public restService: RestService) {

  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      console.log("File name : " + this.selectedFile.name);

      this.restService.uploadFile(this.selectedFile, this.personData.referenceNumber).subscribe(res => {
        console.log("result "+res);
      }, (err) => {
        console.log("error "+err);
      });
    }
  }
}
