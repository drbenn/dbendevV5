import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  protected isMobileView: boolean = false;
  protected leftCurlies: string = '{{';
  protected rightCurlies: string  = '}}';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width && width < 500 ) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    };
  };

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    console.log(elementId);
    
    this.viewportScroller.scrollToAnchor(elementId.toString())
  }

}
