import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

// https://prototyp.digital/blog/how-to-implement-intersection-observer-api-in-angular
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  protected sectionInView: boolean = false;


  tech: {name:string, imgUrl: string, enterAnimClass?: string, startPosClass: string, endPosClass: string}[] = [
    {
      name: 'Ang',
      imgUrl: '../assets/img/tech/angular.png',
      enterAnimClass: 'skill-anim-angular',
      startPosClass: 'skill-start-angular',
      endPosClass: '',
    },
    {
      name: 'JS',
      imgUrl: '../assets/img/tech/js.png',
      enterAnimClass: 'skill-anim-js',
      startPosClass: 'skill-start-js',
      endPosClass: '',
    },
    {
      name: 'TS',
      imgUrl: '../assets/img/tech/ts.png',
      enterAnimClass: 'skill-anim-ts',
      startPosClass: 'skill-start-ts',
      endPosClass: '',
    },
    {
      name: 'Node',
      imgUrl: '../assets/img/tech/node.png',
      enterAnimClass: 'skill-anim-node',
      startPosClass: 'skill-start-node',
      endPosClass: '',
    },
    {
      name: 'React',
      imgUrl: '../assets/img/tech/react.png',
      enterAnimClass: 'skill-anim-react',
      startPosClass: 'skill-start-react',
      endPosClass: '',
    },
    {
      name: 'MySQL',
      imgUrl: '../assets/img/tech/sql2.png',
      enterAnimClass: 'skill-anim-sql',
      startPosClass: 'skill-start-sql',
      endPosClass: '',
    },
    {
      name: 'Git',
      imgUrl: '../assets/img/tech/git.png',
      enterAnimClass: 'skill-anim-git',
      startPosClass: 'skill-start-git',
      endPosClass: '',
    },
    {
      name: 'VSC',
      imgUrl: '../assets/img/tech/vsc.png',
      enterAnimClass: 'skill-anim-vsc',
      startPosClass: 'skill-start-vsc',
      endPosClass: '',
    },
    {
      name: 'JIRA',
      imgUrl: '../assets/img/tech/jira.png',
      enterAnimClass: 'skill-anim-jira',
      startPosClass: 'skill-start-jira',
      endPosClass: '',
    },
    {
      name: 'HTML',
      imgUrl: '../assets/img/tech/html.png',
      enterAnimClass: 'skill-anim-html',
      startPosClass: 'skill-start-html',
      endPosClass: '',
    },
    {
      name: 'SASS',
      imgUrl: '../assets/img/tech/sass.png',
      enterAnimClass: 'skill-anim-sass',
      startPosClass: 'skill-start-sass',
      endPosClass: '',
    },
    {
      name: 'Docker',
      imgUrl: '../assets/img/tech/docker.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'Postgres',
      imgUrl: '../assets/img/tech/postgres.png',
      enterAnimClass: 'skill-anim-postgres',
      startPosClass: 'skill-start-postgres',
      endPosClass: '',
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
