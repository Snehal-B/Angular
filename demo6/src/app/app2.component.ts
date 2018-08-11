import { Component } from '@angular/core';
import { Http,Request } from '@angular/http';
@Component({
  selector: 'my-app2',
  templateUrl: './app2.html'
})
export class App2Component  { name = 'Angular';
myinput:string;
url:string="https://reqres.in/api/users/1";
method:string="GET";
myobj:Object;

constructor(private http:Http){
  console.log(http);
}

public m1():void{
  
  console.log("m1");
  let m:Object=JSON.parse(this.myinput);
  console.log(m);
  let req:Request= new Request(
    {"url":this.url, "method":this.method, "body":m });
    
  console.log(req);
  this.http.request(req).subscribe(
    (resp)=>  this.myobj = resp.json()  ,
    (err)=>  console.log(err)
  );
}


 }
