import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {
  constructor(
    private httpClient: HttpClient
    ) {}


  public initData(): Observable<any> {
    const jsonFile = '../../assets/data/projectData.json';
    return this.httpClient.get(jsonFile) as Observable<any>;
  }

}