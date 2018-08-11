import { Component } from '@angular/core';

@Component({
  selector: 'my-app1',
  template: `Hello form App1 {{name}}
  <input type="button" value="Click " (click)="myclk()" />
  <img src="images/{{imgname}}" />
  `
})
export class App1Component  {
   name = 'Fands';
   imgname = "simple.png";
 public myclk():void{
     console.log("in myclick ");
     if (this.imgname=="simple.png")
      this.imgname="simple1.png";
      else
      this.imgname="simple.png"
   }
}
