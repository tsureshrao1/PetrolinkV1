import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { Router } from '@angular/router';
import { ApiClientService } from './../api-client.service';
declare var $: any;


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css'],
  encapsulation : ViewEncapsulation.None 
})
export class CareersComponent implements OnInit {
  careers:[];
  config: any;
  myForm;
  showHold_ = [];
  successMessage: boolean = false;
  lenghtArea='';
  selectedDate;
  applyJobData: applyJob;
  applyJobDirectData: applyJob;
  public userFile:any = File;
  constructor(private router: Router,private apiClientService: ApiClientService) {
    this.applyJobData = new applyJob();
    this.applyJobDirectData = new applyJob();
  }

  ngOnInit(): void {
    $(document).ready(function() {
    });
    this.apiClientService.getJopOpenings().subscribe((data) => {
      this.careers = data;
      console.log(this.careers.length);
      this.config = {
        itemsPerPage: 6,
        currentPage: 1,
        totalItems: this.careers.length
      };
    });
  }

  clickMore(){
    this.router.navigate(['/carreersList']);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  holdSlide_b(i) {
    this.showHold_[i] = this.showHold_[i] === 'in' ? 'out' : 'in';    
  }

  uploadFile(event){
    const file = event.target.files[0];
    this.userFile = file;
    $('.custom-file-label').html(file.name); 
  }
ModelNot(){
  this.successMessage = false;
}
  applyJob(careerId){
    console.log(careerId);
    if(this.applyJobData != null && this.applyJobData.email != null){
      this.applyJobData.careerId = careerId;
      const profile = JSON.stringify(this.applyJobData);
      const formData = new FormData();
      formData.append('profile',profile);
      formData.append('file',this.userFile);

      this.apiClientService.applyJob(formData).subscribe((data) => {
        if(data != null){
          console.log("Success");
          this.applyJobData.name = "";
          this.applyJobData.dateOfbirth = "";
          this.applyJobData.nationality = "";
          this.applyJobData.email = "";
          this.applyJobData.phoneNumber = "";
          this.applyJobData.mobileNumber = "";
          this.applyJobData.describeCurrentJob = "";
          this.applyJobData.expAbroad = "";
          this.applyJobData.expOthers = "";
          this.applyJobData.qualifications = "";
          this.applyJobData.joiningPeriod = "";
          this.applyJobData.currentSalary = "";
          this.applyJobData.expSalary = "";
          this.applyJobData.presentLocation = "";
          this.successMessage = true;
        }
      });
    }
  }

  applyJobDirect(){
    console.log();
    if(this.applyJobDirectData != null && this.applyJobDirectData.email != null){
      const profile = JSON.stringify(this.applyJobDirectData);
      const formData = new FormData();
      formData.append('profile',profile);
      formData.append('file',this.userFile);
      this.apiClientService.applyJobDirect(formData).subscribe((data) => {
        if(data != null){
          console.log("Success");
          this.applyJobDirectData.name = "";
          this.applyJobDirectData.dateOfbirth = "";
          this.applyJobDirectData.nationality = "";
          this.applyJobDirectData.email = "";
          this.applyJobDirectData.phoneNumber = "";
          this.applyJobDirectData.mobileNumber = "";
          this.applyJobDirectData.describeCurrentJob = "";
          this.applyJobDirectData.expAbroad = "";
          this.applyJobDirectData.expOthers = "";
          this.applyJobDirectData.qualifications = "";
          this.applyJobDirectData.joiningPeriod = "";
          this.applyJobDirectData.currentSalary = "";
          this.applyJobDirectData.expSalary = "";
          this.applyJobDirectData.presentLocation = "";
          this.successMessage = true;
        }
      });
    }
  }

}

export class careers{
  id:any;
  role:string;
  jobSummary:String;
  jobDescription:String;
}


export class applyJob{
  id:any;
  careerId:any;
  name:String;
  dateOfbirth:any;
  nationality:String;
  email:String;
  phoneNumber:String;
  mobileNumber:String;
  describeCurrentJob:String;
  expAbroad:String;
  expOthers:String;
  qualifications:String;
  joiningPeriod:String;
  currentSalary:String;
  expSalary:String;
  presentLocation:String;
}
