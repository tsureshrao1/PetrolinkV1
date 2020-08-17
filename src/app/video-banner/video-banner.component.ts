import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class VideoBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  videoPlayClick(){
    $("#video").get(0).play();
    $("#video").prop('muted', false);
  }

  videoPauseClick(){
    $("#video").get(0).pause();
  }

}
