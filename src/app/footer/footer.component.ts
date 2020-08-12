import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  selected:string;
  constructor() { }

  ngOnInit(): void {
  }

  scrollToDiv(divName){
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
    //document.getElementById(divName+"_a").classList.add('active');
  }

}
