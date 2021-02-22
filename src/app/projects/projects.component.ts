import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
slide_togg = true;
  constructor() { }

  ngOnInit(): void {    
    $('#carousel3, #carousel3').carousel({
      interval: 2750
    })
  }

  toggfunc() {
    this.slide_togg = !this.slide_togg;
  }



}
