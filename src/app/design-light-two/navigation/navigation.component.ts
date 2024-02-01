import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  protected isMobileView: boolean = false;
  protected visibleSidebar!: boolean;
  protected leftCurlies: string = '{{';
  protected rightCurlies: string  = '}}';
  protected isNavSticky: boolean = false;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width && width < 700 ) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    };
  };

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    console.log('scroll event');
    // console.log(event);
    console.log(event.target['scrollingElement'].scrollTop);
    if (event.target['scrollingElement'].scrollTop > 200) {
      this.isNavSticky = true;
    } else {
      this.isNavSticky = false;
    }
    console.log(this.isNavSticky);
    
    
    
    // const width = event.target.innerWidth;
    // if (width && width < 700 ) {
    //   this.isMobileView = true;
    // } else {
    //   this.isMobileView = false;
    // };
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
