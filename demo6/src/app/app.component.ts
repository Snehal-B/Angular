import { Component } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <input type="button" value="Click to get Data " (click)="m1()"/>
  <div *ngIf="myobj">
  {{myobj | json}}<br/>
  {{myobj.data["id"]}}
  {{myobj.data.first_name}}
  </div>`,
})
export class AppComponent  { name = 'Angular';
myobj:Object;
constructor(private http:Http){
  console.log(http);}

public m1():void{
  let url:string="https://reqres.in/api/users/1";
  console.log("m1");
  this.http.get(url).subscribe(
    (resp)=>  this.myobj = resp.json()  ,
    (err)=>  console.log(err)
  );
}


 }
