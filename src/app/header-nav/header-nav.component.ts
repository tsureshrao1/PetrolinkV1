import { Component, OnInit, ViewEncapsulation, HostListener, Inject, ElementRef, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class HeaderNavComponent implements OnInit {
  selected:string;  
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {                 
  }
  
  scrollToDiv(divName){
    document.getElementById(divName).scrollIntoView({behavior:"smooth"});      
  } 

  @HostListener('window:scroll', [])  
  onWindowScroll() {
    if (document.body.scrollTop !> 100 || document.documentElement.scrollTop !> 100) {
      document.getElementById('subTitle').classList.add('sticky_nav');      
    }
    else {
        document.getElementById('subTitle').classList.remove('sticky_nav');        
      }
      this.onWindowActive()
    }
    
    onWindowActive() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ||  0;       

    if ( scrollPosition >= document.getElementById('banner').offsetTop && scrollPosition < document.getElementById('banner').scrollHeight + document.getElementById('banner').offsetTop ) {
      document.getElementById("header_a").classList.add('active');
    } else {
      document.getElementById("header_a").classList.remove('active');
    }
    if ( scrollPosition >= document.getElementById('about').offsetTop && scrollPosition < document.getElementById('about').scrollHeight + document.getElementById('about').offsetTop ) {
      document.getElementById("about_a").classList.add('active');
    } else {
      document.getElementById("about_a").classList.remove('active');
    }
    if ( scrollPosition >= document.getElementById('chairman').offsetTop && scrollPosition < document.getElementById('chairman').scrollHeight + document.getElementById('chairman').offsetTop ) {
      document.getElementById("chairman_a").classList.add('active');
    } else {
      document.getElementById("chairman_a").classList.remove('active');
    }
    if ( scrollPosition >= document.getElementById('subsidiaries').offsetTop && scrollPosition < document.getElementById('subsidiaries').scrollHeight + document.getElementById('subsidiaries').offsetTop ) {
      document.getElementById("subsidiaries_a").classList.add('active');
    } else {
      document.getElementById("subsidiaries_a").classList.remove('active');
    }
    if ( scrollPosition >= document.getElementById('projects').offsetTop  && scrollPosition < document.getElementById('projects').scrollHeight + document.getElementById('projects').offsetTop -1 ) {
      document.getElementById("projects_a").classList.add('active');
    } else {
      document.getElementById("projects_a").classList.remove('active');
    }
    if ( scrollPosition >= document.getElementById('careers').offsetTop - 1  && scrollPosition  < document.getElementById('careers').scrollHeight + document.getElementById('careers').offsetTop - 16 ) {
      document.getElementById("careers_a").classList.add('active');
    } else {
      document.getElementById("careers_a").classList.remove('active');
    }
    if ( scrollPosition >= document.getElementById('contact').offsetTop - 1 && scrollPosition < document.getElementById('contact').scrollHeight + document.getElementById('contact').offsetTop ) {
      document.getElementById("contact_a").classList.add('active');
    } else {
      document.getElementById("contact_a").classList.remove('active');
    }  
    console.log(scrollPosition);
    console.log(document.getElementById('careers').scrollHeight + document.getElementById('careers').offsetTop);
  } 
    

 
}
