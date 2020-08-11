import { Component, OnInit, ViewEncapsulation, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

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
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (document.body.scrollTop !> 100 ||     
    document.documentElement.scrollTop !> 100) {
      document.getElementById('subTitle').classList.add('sticky_nav');      
    }
    else {
        document.getElementById('subTitle').classList.remove('sticky_nav');        
    }
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
