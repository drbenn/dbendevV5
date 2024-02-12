import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

// https://prototyp.digital/blog/how-to-implement-intersection-observer-api-in-angular
@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  protected sectionInView: boolean = false;


  tech: {name:string, imgUrl: string, enterAnimClass?: string, startPosClass: string, endPosClass: string}[] = [
    {
      name: 'Angular',
      imgUrl: '../assets/img/tech/angular.png',
      enterAnimClass: 'skill-anim-angular',
      startPosClass: 'skill-start-angular',
      endPosClass: '',
    },
    {
      name: 'TypeScript',
      imgUrl: '../assets/img/tech/ts.png',
      enterAnimClass: 'skill-anim-ts',
      startPosClass: 'skill-start-ts',
      endPosClass: '',
    },
    {
      name: 'JavaScript',
      imgUrl: '../assets/img/tech/javascript.png',
      enterAnimClass: 'skill-anim-js',
      startPosClass: 'skill-start-js',
      endPosClass: '',
    },
    {
      name: 'NodeJs',
      imgUrl: '../assets/img/tech/nodejs.png',
      enterAnimClass: 'skill-anim-node',
      startPosClass: 'skill-start-node',
      endPosClass: '',
    },
    {
      name: 'NestJs',
      imgUrl: '../assets/img/tech/nestjs.png',
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
      name: 'NGXS',
      imgUrl: '../assets/img/tech/ngxs.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'RxJS',
      imgUrl: '../assets/img/tech/rxjs.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'Redux',
      imgUrl: '../assets/img/tech/redux.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'SQL',
      imgUrl: '../assets/img/tech/sql.png',
      enterAnimClass: 'skill-anim-sql',
      startPosClass: 'skill-start-sql',
      endPosClass: '',
    },
    {
      name: 'MySQL',
      imgUrl: '../assets/img/tech/mysql.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'PostgreSQL',
      imgUrl: '../assets/img/tech/postgresql.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'Mongo DB',
      imgUrl: '../assets/img/tech/mongodb.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
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
      name: 'GitHub',
      imgUrl: '../assets/img/tech/github.png',
      enterAnimClass: 'skill-anim-github',
      startPosClass: 'skill-start-github',
      endPosClass: '',
    },
    {
      name: 'GitLab',
      imgUrl: '../assets/img/tech/gitlab.png',
      enterAnimClass: 'skill-anim-gitlab',
      startPosClass: 'skill-start-gitlab',
      endPosClass: '',
    },
    {
      name: 'Bash',
      imgUrl: '../assets/img/tech/bash.png',
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
      name: 'Material',
      imgUrl: '../assets/img/tech/material.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'Prime NG',
      imgUrl: '../assets/img/tech/primeng.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'Bootstrap',
      imgUrl: '../assets/img/tech/bootstrap.png',
      enterAnimClass: 'skill-anim-bootstrap',
      startPosClass: 'skill-start-bootstrap',
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
      name: 'HTML',
      imgUrl: '../assets/img/tech/html.png',
      enterAnimClass: 'skill-anim-html',
      startPosClass: 'skill-start-html',
      endPosClass: '',
    },
    {
      name: 'Chart.js',
      imgUrl: '../assets/img/tech/chartjs.png',
      enterAnimClass: 'skill-anim-chartjs',
      startPosClass: 'skill-start-chartjs',
      endPosClass: '',
    },
    {
      name: 'D3.js',
      imgUrl: '../assets/img/tech/d3js.png',
      enterAnimClass: 'skill-anim-d3js',
      startPosClass: 'skill-start-d3js',
      endPosClass: '',
    },
    {
      name: 'HighCharts',
      imgUrl: '../assets/img/tech/highcharts.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'Leaflet',
      imgUrl: '../assets/img/tech/leaflet.png',
      enterAnimClass: 'skill-anim-docker',
      startPosClass: 'skill-start-docker',
      endPosClass: '',
    },
    {
      name: 'VS Code',
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
      name: 'Figma',
      imgUrl: '../assets/img/tech/figma.png',
      enterAnimClass: 'skill-anim-jira',
      startPosClass: 'skill-start-jira',
      endPosClass: '',
    },
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
    // console.log('Element #' + index + ' is intersecting ' + status + ' : ITEM: ' + item)
    // console.log('section in view: ', this.sectionInView);
    // console.log(event);
    // console.log(trigger);
    
    if (status === true && trigger === 'skills' && index === 0 ) {

      this.sectionInView =  true;
    }
    // console.log('section in view: ', this.sectionInView);
  };

  setItemAnimationStyle() {

  };



}
