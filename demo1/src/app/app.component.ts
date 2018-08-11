import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello from App.component {{name}}</h1>
  Before<my-app1>in myapp1loading </my-app1>After
  `

})
export class AppComponent  {
   name = 'Vaishali';
  address="Pune";
 }
//<my-app>message</my-app>