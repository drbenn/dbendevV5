import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ProjectDataService } from 'src/app/design-dark-one/shared/project-data/project-data.service';

@Component({
  selector: 'past-projects',
  templateUrl: './past-projects.component.html',
  styleUrls: ['./past-projects.component.scss']
})
export class PastProjectsComponent implements OnInit {
  @Input() isMobileView!: boolean;
  @Input() mobileViewWidth!: number;
  protected yScrollPosition: number = 0;

  protected projects: any;
  protected isTitleViewed: boolean = false;
  protected statusesInView: string[] = ['past']; //options 'past', 'archived' and 'featured'
  // array items scroll
  protected arrayItems: any = {};

  // modal
  protected displayModal!: boolean;
  protected modalTitle!: string;
  protected modalOneLine!: string;
  protected modalDetail!: string;
  protected modalImgSrc!: string;
  protected modalTimeline!: string;
  protected modalGitLink!: string;
  protected modalDemoLink!: string;
  protected modalTechImg!: string[];
  protected modalTechName!: string[];
  protected modalImgBackgroundPosition!: string;
  
  constructor(
    private dataService: ProjectDataService
  ) { }

  ngOnInit(): void {
    this.dataService.initData().pipe(take(1)).subscribe((data: any) => {
      const newToOld: any[] = [];
      if (data && data.length) {
        console.log(data);
        
        data.forEach((item:any) => {
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
  }

  isIntersecting (status: boolean, trigger?: string, arrayItem?: string ) {
    if ( trigger === 'array-item' && status && arrayItem) {
      const key = arrayItem?.toString()
      this.arrayItems[key] = true
    }
    trigger === 'past-project-title' && status === true ? this.isTitleViewed = true : null;
    // trigger === 'hero-img' && status === true ? this.heroImgIsIntersecting = true : this.heroImgIsIntersecting = false;    
  };

  protected titleClass(isTitleViewed: boolean, isMobileView: boolean ): string {
    let returnString: string = '';
    isMobileView ? returnString += 'text-6xl ' : returnString += 'text-8xl ';
    isTitleViewed ? returnString += 'text-in opaque' : returnString += 'transparent';
    return returnString;
  };

  protected showModalDialog(project: any): void {
    this.displayModal = true;
    this.modalTitle = project.title;
    this.modalOneLine = project.oneLine;
    this.modalDetail = project.detail;
    this.modalImgSrc = project.img;
    this.modalTimeline = project.timeLine;
    this.modalGitLink = project.gitLink;
    this.modalDemoLink = project.demoLink;
    this.modalTechImg = [];
    project.tech.forEach((tech: string) => this.modalTechImg.push('../../../../../assets/img/tech/' + tech.toLowerCase() + '.png'));
    this.modalTechName = [];
    project.tech.forEach((tech: string) => {
      this.modalTechName.push(tech)
    });
    this.modalImgBackgroundPosition = project.imgBackgroundPosition;
  };

  protected addArchivedProjectsToView(): void {
    this.statusesInView.push('archived');
  };

}
