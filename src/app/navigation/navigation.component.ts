import { ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnChanges {
  @Input() isMobileView!: boolean;
  @Input() yScrollPosition: number = 0;
  protected visibleSidebar!: boolean;
  protected leftCurlies: string = '{{';
  protected rightCurlies: string  = '}}';
  protected isNavSticky: boolean = false;



  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    if (this.yScrollPosition > 32) {
      this.isNavSticky = true;
    } else {
      this.isNavSticky = false;
    };
  };

  ngOnChanges(changes: any) {
    if (changes['yScrollPosition']) {
      this.yScrollPosition = changes['yScrollPosition'].currentValue;
      if (this.yScrollPosition > 32) {
        this.isNavSticky = true;
      } else {
        this.isNavSticky = false;
      };
    }
  };

  protected onClickScroll(elementId: string): void {
    console.log(elementId);
    this.viewportScroller.scrollToAnchor(elementId.toString())
  };

  protected sidebarClose(): void {
    this.visibleSidebar = false; 
  };
}
