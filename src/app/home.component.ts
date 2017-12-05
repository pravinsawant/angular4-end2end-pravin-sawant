import { Component, OnInit } from '@angular/core';

@Component({
  template : `
    <div id='upperPart'></div>
    <h1>Welcome to Asset Management System</h1>
    <div id='upperPart'></div>
  `,
  styles:[`
      #upperPart{
        background-color: rgb(0, 82, 129);
        height: 100px;
      }
  `]
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
