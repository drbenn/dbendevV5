import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../shared/project-data/project-data.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  // displayModal!: boolean;;
  visibleProjectsSidebar!: boolean;

  constructor(
    private dataService: ProjectDataService
  ) { }

  ngOnInit(): void {
    this.dataService.initData().pipe(take(1)).subscribe((data: any) => {
      const newToOld: any[] = [];
      if (data && data.length) {
        data.forEach((item:any) => {
          newToOld.unshift(item)
        });
      };
      this.projects = newToOld;
    });
    
  }

  // protected showModalDialog(): void {
  //   this.displayModal = true;
  // };

  // protected dialogClose(): void {
  //   this.displayModal = false; 
  // };

  protected projectsSidebarClose(): void {
    this.visibleProjectsSidebar = false; 
  };

  protected getInlineStyle(url: string): any {
    return {
      // backgroundColor: 'blue',
      // color: 'green',
      // background: `url("${url}") no-repeat center center fixed`,
      // backgroundRepeat: 'no-repeat',
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // height: '100%',
      // width: '10rem',
      // objectFit: 'cover'
      // background-image: url("../../assets/img/projects/history/mtlt.png");
      // background: url("../../assets/img/projects/history/mtlt.png"),
      // backgroundSize: 'cover',
      // height: '8rem',
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'center' 

    }
  }

  activeBg: string = 'grad-1';
  changeBg() {
    if (this.activeBg === 'grad-1') {
      this.activeBg = 'grad-2'
    } else {
      this.activeBg = 'grad-1'
    }
  }

}
