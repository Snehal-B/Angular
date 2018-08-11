import { Component } from '@angular/core';
import { SimpleService } from './simple.service';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <button (click)="btnclick()" >Click to Check</button>`,
 
})
export class AppComponent  { 
  name = 'Angular';
/*  ss:SimpleService;
  constructor(ss:SimpleService){
      this.ss = ss;
  }*/
  constructor(private ss:SimpleService){
 }

 btnclick():void{
   this.ss.m1();
 }
}
