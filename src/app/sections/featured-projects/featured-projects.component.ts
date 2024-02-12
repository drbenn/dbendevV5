import { Component, HostListener, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ProjectDataService } from 'src/app/design-dark-one/shared/project-data/project-data.service';

@Component({
  selector: 'featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {
  protected projects: any;
  @Input() isMobileView!: boolean;
  @Input() mobileViewWidth!: number;
  protected yScrollPosition: number = 0;
  // hero img scroll properties
  protected heroImgIsIntersecting!: boolean;
  protected heroWidth: string = '100%';
  protected heroRadius: string = '0px';
  protected heroGrayscale: string = 'grayscale(0%)';

  // feature title
  // protected featureTitleIsIntersecting!: boolean;
  // protected featureTitleOpacity: string = '0';
  // protected featureTitleOffsetY: string = '50px';
  protected isTitleViewed: boolean = false;

  

  constructor(
    private dataService: ProjectDataService
  ) { }

  ngOnInit(): void {
    this.dataService.initData().pipe(take(1)).subscribe((data: any) => {
      const newToOld: any[] = [];
      if (data && data.length) {
        data.filter((project: any) => project.viewStatus === 'featured' )
        .forEach((item:any) => {
          newToOld.unshift(item)
        });
      };
      this.projects = newToOld;
    });
    this.yScrollPosition = window.scrollY;
      if (window.innerWidth > this.mobileViewWidth) {
        this.isMobileView = false;
      } else {
        this.isMobileView = true;
      };
  };

  isIntersecting (status: boolean, trigger?: string, arrayItem?: string ) {
    // console.log('is intersecting: ', status, trigger, arrayItem);
    // if ( trigger === 'array-item' && status && arrayItem) {
    //   const key = arrayItem?.toString()
    //   this.arrayItems[key] = true
    // }
    trigger === 'hero-img' && status === true ? this.heroImgIsIntersecting = true : this.heroImgIsIntersecting = false;
    trigger === 'feature-title' && status === true ? this.isTitleViewed = true : null;
    // console.log(this.arrayItems);
    
  };

  private previousYPosition!: number;
  private scrollingDirection!: 'up' | 'down';
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    this.yScrollPosition = window.scrollY;
    this.previousYPosition >= this.yScrollPosition ? this.scrollingDirection = 'up' : this.scrollingDirection = 'down';

    // Feature title opacity
    // const featureTitleOpacityIntensity: number = 0.15;
    // if (this.featureTitleIsIntersecting && this.scrollingDirection === 'down' && parseFloat(this.featureTitleOpacity) < 1 ) {
    //   // get opaque
    //   this.featureTitleOpacity = (parseFloat(this.featureTitleOpacity) + featureTitleOpacityIntensity).toString();
    // } 
    // else if (this.featureTitleIsIntersecting && this.scrollingDirection === 'up' && parseFloat(this.featureTitleOpacity) > 0 ) {
    //   // get transparent
    //   this.featureTitleOpacity = (parseFloat(this.featureTitleOpacity) - featureTitleOpacityIntensity).toString();
    // };

    // Feature title Y offset
    // const featureTitleYOffsetIntensity: number = 10;
    // if (this.featureTitleIsIntersecting && this.scrollingDirection === 'down' && parseInt(this.featureTitleOffsetY.slice(0,-2)) >= 0 && parseInt(this.featureTitleOffsetY.slice(0,-2)) <= 300 ) {
    //   // get rounder
    //   this.featureTitleOffsetY = (parseFloat(this.featureTitleOffsetY.slice(0,-2)) - featureTitleYOffsetIntensity).toString() + 'px';
    // } 
    
    // HERO SIZING
    const heroScaleIntensity: number = 1.15;
    if (this.heroImgIsIntersecting && this.scrollingDirection === 'down' && parseInt(this.heroWidth.slice(0,-1)) >= 50 ) {
      // get smaller
      this.heroWidth = (parseFloat(this.heroWidth.slice(0,-1)) - heroScaleIntensity).toString() + '%';
    } else if (this.heroImgIsIntersecting && this.scrollingDirection === 'up' && parseInt(this.heroWidth.slice(0,-1)) <= 99 ) {
      // get bigger
      this.heroWidth = (parseFloat(this.heroWidth.slice(0,-1)) + heroScaleIntensity).toString() + '%';
    };

    // HERO RADIUS
    const heroRadiusIntensity: number = 1;
    if (this.heroImgIsIntersecting && this.scrollingDirection === 'down' && parseInt(this.heroRadius.slice(0,-2)) <= 15 ) {
      // get rounder
      this.heroRadius = (parseFloat(this.heroRadius.slice(0,-2)) + heroRadiusIntensity).toString() + 'px';
    } else if (this.heroImgIsIntersecting && this.scrollingDirection === 'up' && parseInt(this.heroRadius.slice(0,-2)) >= 0 ) {
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

  protected titleClass(isTitleViewed: boolean, isMobileView: boolean ): string {
    let returnString: string = '';
    isMobileView ? returnString += 'text-6xl ' : returnString += 'text-8xl ';
    isTitleViewed ? returnString += 'text-in opaque' : returnString += 'transparent';
    return returnString;
  };


}
