import { Component, OnInit, Input } from '@angular/core';
import { person } from "../utils/person";
import { RestService } from '../rest.service';
import { Status } from '../newperson/newperson.component';

@Component({
  selector: 'app-persondata',
  templateUrl: './persondata.component.html',
  styleUrls: ['./persondata.component.css']
})
export class PersondataComponent implements OnInit {

  @Input() personData: person;
  selectedFile: File;

  militaryStatus: Status[] = [
    { value: '0', viewValueEN: 'Finished', viewValueAR: 'اتم الخدمه' },
    { value: '1', viewValueEN: 'postponed', viewValueAR: 'تأجيل' },
    { value: '2', viewValueEN: 'Exemption', viewValueAR: 'اعفاء' },
    { value: '3', viewValueEN: 'Inappropriate', viewValueAR: 'غير لائق' }
  ];

  maritalStatus: Status[] = [
    { value: '1', viewValueEN: 'Single', viewValueAR: 'اعزب' },
    { value: '2', viewValueEN: 'divorcee', viewValueAR: 'مطلق' },
    { value: '3', viewValueEN: 'Widowed', viewValueAR: 'ارمل' }
  ];

  constructor(public restService: RestService) {
  
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    
    if (this.selectedFile) {
      console.log("File name : " + this.selectedFile.name);

      this.restService.uploadFile(this.selectedFile, this.personData.referenceNumber).subscribe(res => {
        console.log("result " + res);
      }, (err) => {
        console.log("error " + err);
      });
    }
  }

  onUpload(){

  }
}
