import {Component, OnInit} from '@angular/core';
import { ErrorHandler } from '@angular/core/src/error_handler';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent implements OnInit{
  name : string;

  //Suitable for dependency injection & object creation
  //Do non costly operations here
  constructor(){

  }

  ngOnInit(){
    //Do Service call
    this.name = this.getName();
  }

  getName() : string{
    //Call Service
    return "Angular";
  }
}
