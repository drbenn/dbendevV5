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
  displayModal!: boolean;;

  constructor(
    private dataService: ProjectDataService
  ) { }

  ngOnInit(): void {
    this.dataService.initData().pipe(take(1)).subscribe((data: any) => {
      console.log(this.projects);
      this.projects = data;
    });
    
  }

  protected showModalDialog() {
    this.displayModal = true;
}

}
