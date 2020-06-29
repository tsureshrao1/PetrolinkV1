import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
  )]
})
export class AppComponent implements OnInit{
  title = 'Petrolink';
  selected:string;
  ngOnInit() {
    $(document).ready(function(){
      $("#typed").typing({
        strings: ['string 1', 'string 2', 'string 3'],
        speed : 100,
        cursorSpeed : 1000,
        nextStringDelay: 750,
        lifeLike : true,
        html : true,
        cursor : true,
        breakLines : true,
        startDelay : 250,
        loopDelay : 750,
        typeSpeed : 50,
        loop : true,
        loopCount: 5000,
        color : '#8dc63f',
        typingColor : '#8dc63f'
      });
    });
  }

  constructor(@Inject(DOCUMENT) document){

  }

  scrollToTop(){
    $("header").scrollIntoView({behavior:"smooth"});
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

  videoPlayClick(){
    $("#video").get(0).play();
    $("#video").prop('muted', false);
  }

  videoPauseClick(){
    $("#video").get(0).pause();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     /*if (window.pageYOffset > 50) {
       let element = document.getElementById('header');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('header');
        element.classList.remove('sticky'); 
     }*/
  }


}
