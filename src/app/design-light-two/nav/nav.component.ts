import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponentimplements implements OnInit {
  protected isMobileView: boolean = false;
  protected visibleSidebar!: boolean;
  protected leftCurlies: string = '{{';
  protected rightCurlies: string  = '}}';


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width && width < 700 ) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    };
  };

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    if (window.innerWidth < 700) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    };
  };

  protected onClickScroll(elementId: string): void {
    console.log(elementId);
    
    this.viewportScroller.scrollToAnchor(elementId.toString())
  };

  protected sidebarClose(): void {
    this.visibleSidebar = false; 
  };
}
