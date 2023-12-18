import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

// https://prototyp.digital/blog/how-to-implement-intersection-observer-api-in-angular
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  protected sectionInView: boolean = false;


  tech: {name:string, imgUrl: string}[] = [
    {
      name: 'Ang',
      imgUrl: '',
    },
    {
      name: 'JS',
      imgUrl: '',
    },
    {
      name: 'TS',
      imgUrl: '',
    },
    {
      name: 'Node',
      imgUrl: '',
    },
    {
      name: 'React',
      imgUrl: '',
    },
    {
      name: 'MySQL',
      imgUrl: '',
    },
    {
      name: 'Git',
      imgUrl: '',
    },
    {
      name: 'VSC',
      imgUrl: '',
    },
    {
      name: 'JIRA',
      imgUrl: '',
    },
    {
      name: 'HTML',
      imgUrl: '',
    },
    {
      name: 'SASS',
      imgUrl: '',
    },
    {
      name: 'Docker',
      imgUrl: '',
    },
    {
      name: 'Postgres',
      imgUrl: '',
    }
  ]

  constructor(  
    private elementRef: ElementRef,

    ) {}
  private observer!: IntersectionObserver;

  ngOnInit(): void {

  }

  // ngOnDestroy(): void {
  //   if (this.observer) {
  //     this.observer.disconnect();
  //   }
  // }

  isIntersecting (status: boolean, trigger?: string, index?: number, item?: any) {
    console.log('Element #' + index + ' is intersecting ' + status + ' : ITEM: ' + item)
    console.log('section in view: ', this.sectionInView);
    console.log(event);
    
    if (status === true && trigger === 'skills' && index === 0 ) {

      this.sectionInView =  true;
    }
    console.log('section in view: ', this.sectionInView);
  };

  setItemAnimationStyle() {

  };



}
