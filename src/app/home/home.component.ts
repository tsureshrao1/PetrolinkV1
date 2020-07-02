import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected:string;
  constructor() { }

  ngOnInit(): void {
  }

  scrollToDiv(divName){
    if(divName != 'header'){
      document.getElementById(divName).scrollIntoView({behavior:"smooth"});
      document.getElementById("header_a").classList.remove('active');
      if(this.selected == null){
        this.selected = divName+"_a";
        document.getElementById(divName+"_a").classList.add('active');
      }else{
        document.getElementById(this.selected).classList.remove('active');
        document.getElementById(divName+"_a").classList.add('active');
        this.selected = divName+"_a";
      }
    }else{
      document.getElementById("about_a").classList.remove('active');
      document.getElementById("subsidiaries_a").classList.remove('active');
      document.getElementById("projects_a").classList.remove('active');
      document.getElementById("careers_a").classList.remove('active');
      document.getElementById("contact_a").classList.remove('active');
      document.getElementById("header_a").classList.add('active');
      document.getElementById(divName).scrollIntoView({behavior:"smooth"});
    }
    
    //document.getElementById(divName+"_a").classList.add('active');
  }

}
