import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  @Input() isMobileView!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
