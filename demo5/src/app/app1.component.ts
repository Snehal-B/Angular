import { Component } from '@angular/core';
import { SimpleService } from './simple.service';
@Component({
  selector: 'my-app1',
  template: `<h1>HelloApp1 {{name}}</h1>`,
   
})
export class App1Component  { name = 'App1Componet details';
constructor(private ss:SimpleService){
 }
 }
