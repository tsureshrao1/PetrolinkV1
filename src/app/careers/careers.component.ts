import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickMore(){
    this.router.navigate(['/carreersList']);
  }

}
