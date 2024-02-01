import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss']
})
export class ScrollingComponent implements OnInit {
  colors: string[] = ['lime', 'salmon', 'violet', 'orange', 'blue', 'honeydew'];
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: number): void {
    this.viewportScroller.scrollToAnchor(elementId.toString())
  }

}
