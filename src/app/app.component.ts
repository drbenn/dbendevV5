import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  protected mobileViewWidth: number = 700;
  protected isMobileView!: boolean;
  protected yScrollPosition: number = 0;

  // hero scroll properties
  protected heroImgIsIntersecting!: boolean;
  protected heroWidth: string = '100%';
  protected heroRadius: string = '0px';
  protected heroGrayscale: string = 'grayscale(0%)';

  // array items scroll
  protected arrayItems: any = {};



  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const width = event.target.innerWidth;
    if (width && width < this.mobileViewWidth ) {
      this.isMobileView = true;
    } else {
      this.isMobileView = false;
    };
  };

  private previousYPosition!: number;
  private scrollingDirection!: 'up' | 'down';
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.yScrollPosition = window.scrollY;
    this.previousYPosition >= this.yScrollPosition ? this.scrollingDirection = 'up' : this.scrollingDirection = 'down';

    // HERO SIZING
    const heroScaleIntensity: number = 0.35;
    if (this.heroImgIsIntersecting && this.scrollingDirection === 'down' && parseInt(this.heroWidth.slice(0,-1)) >= 75 ) {
      // get smaller
      this.heroWidth = (parseFloat(this.heroWidth.slice(0,-1)) - heroScaleIntensity).toString() + '%';
    } else if (this.heroImgIsIntersecting && this.scrollingDirection === 'up' && parseInt(this.heroWidth.slice(0,-1)) <= 99 ) {
      // get bigger
      this.heroWidth = (parseFloat(this.heroWidth.slice(0,-1)) + heroScaleIntensity).toString() + '%';
    };

    // HERO RADIUS
    const heroRadiusIntensity: number = 1;
    if (this.heroImgIsIntersecting && this.scrollingDirection === 'down' && parseInt(this.heroRadius.slice(0,-2)) <= 40 ) {
      // get rounder
      this.heroRadius = (parseFloat(this.heroRadius.slice(0,-2)) + heroRadiusIntensity).toString() + 'px';
    } else if (this.heroImgIsIntersecting && this.scrollingDirection === 'up' && parseInt(this.heroRadius.slice(0,-2)) <= 0 ) {
      // get squarer
      this.heroRadius = (parseFloat(this.heroRadius.slice(0,-2)) - heroRadiusIntensity).toString() + 'px';
    };

    // GRAYSCALE
    // const grayscaleIntensity: number = 2;
    // let grayValueInterim: string = this.heroGrayscale.replace('grayscale(', '');
    // let grayValue: string = grayValueInterim.slice(0, -2);
    // if (this.heroImgIsIntersecting && this.scrollingDirection === 'down' && parseInt(grayValue) >= 0 ) {
    //   // get more color
    //   this.heroGrayscale = 'grayscale(' + (parseFloat(grayValue) - grayscaleIntensity).toString() + '%)';
    // } else if (this.heroImgIsIntersecting && this.scrollingDirection === 'up' && parseInt(grayValue) <= 100 ) {
    //   // get grayer
    //   this.heroGrayscale = 'grayscale(' + (parseFloat(grayValue) + grayscaleIntensity).toString() + '%)';
    // };

    // keep record of previous position to determine current direction
    this.previousYPosition = this.yScrollPosition;
  };

  ngOnInit(): void {
    this.yScrollPosition = window.scrollY;
      if (window.innerWidth > this.mobileViewWidth) {
        this.isMobileView = false;
      } else {
        this.isMobileView = true;
      };
  };

  isIntersecting (status: boolean, trigger?: string, arrayItem?: string ) {
    console.log('is intersecting: ', status, trigger, arrayItem);
    if ( trigger === 'array-item' && status && arrayItem) {
      const key = arrayItem?.toString()
      this.arrayItems[key] = true
    }
    trigger === 'hero-img' && status === true ? this.heroImgIsIntersecting = true : this.heroImgIsIntersecting = false;
    console.log(this.arrayItems);
    
  };
}
