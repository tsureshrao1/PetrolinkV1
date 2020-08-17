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
  }

}
