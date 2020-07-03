import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClientService } from './../api-client.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  careers:Array<careers>;
  config: any;
  constructor(private router: Router,private apiClientService: ApiClientService) {
    
  }

  ngOnInit(): void {
    console.log("Hello");
    this.apiClientService.getData().subscribe((data) => {
      this.careers = data;
      console.log(this.careers.length);
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.careers.length
      };
    });
    /*this.careers = new Array<any>();
    this.careers.push(new careers("1","Senior Electricion1","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("2","Senior Electricion2","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("3","Senior Electricion3","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("4","Senior Electricion4","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("5","Senior Electricion5","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("6","Senior Electricion6","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("7","Senior Electricion7","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("8","Senior Electricion8","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("9","Senior Electricion9","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("10","Senior Electricion10","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("11","Senior Electricion11","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));
    this.careers.push(new careers("12","Senior Electricion12","Minimum 7 years of Mechanical Maintanance experience in Drilling Industry."));*/
    
  }

  clickMore(){
    this.router.navigate(['/carreersList']);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}

export class careers{
  id:any;
  role:string;
  jobDescription:String;

  constructor(id,role,jobDescription){
    this.id = id;
    this.role = role;
    this.jobDescription = jobDescription;
  }
}
