import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  protected leftCurlies: string = '{{';
  protected rightCurlies: string  = '}}';

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    console.log(elementId);
    
    this.viewportScroller.scrollToAnchor(elementId.toString())
  }

}
