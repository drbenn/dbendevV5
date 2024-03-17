import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bars-break',
  templateUrl: './bars-break.component.html',
  styleUrls: ['./bars-break.component.scss']
})
export class BarsBreakComponent implements OnInit {
  isBarOneInView = false;
  barOneWidth: string = '';
  barTwoWidth: string = '';
  barThreeWidth: string = '';

  ngOnInit(): void {
    this.barOneWidth = this.getRandomNumberBetween(40, 55).toString() + '%';
    this.barTwoWidth = this.getRandomNumberBetween(50, 70).toString() + '%';
    this.barThreeWidth = this.getRandomNumberBetween(40, 70).toString() + '%';
  };


  isIntersecting (status: boolean, trigger?: string, arrayItem?: string ) {
    trigger === 'bar-one' && status === true ? this.isBarOneInView = true : null;
    // console.log('is intersecting: ', status, trigger, arrayItem);
    // if ( trigger === 'array-item' && status && arrayItem) {
    //   const key = arrayItem?.toString()
    //   this.arrayItems[key] = true
    // }
    // trigger === 'hero-img' && status === true ? this.heroImgIsIntersecting = true : this.heroImgIsIntersecting = false;
    // trigger === 'feature-title' && status === true ? this.isTitleViewed = true : null;
    // console.log(this.arrayItems);
    
  };

  private getRandomNumberBetween(min: number, max: number) {
    if (min > max) {
      [min, max] = [max, min]; // Swap values if necessary
    }

    const random = Math.random();
    const scaledRandom = random * (max - min + 1);
    return Math.floor(scaledRandom) + min;
  };
}
