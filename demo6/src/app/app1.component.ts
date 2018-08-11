import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { SimpleService } from './simple.service';
@Component({
  selector: 'my-app1',
  templateUrl: './disp.html'
})
export class App1Component  { 
url:string="https://reqres.in/api/users?page=";
retdata:Object;
myobj:Object;
constructor(private ss: SimpleService){
  }

public posttest(){

let m = {
    "name": "Vaishali",
    "job": "Trainer"
}
this.ss.postexample("https://reqres.in/api/users", m).subscribe(
  (resp:Response)=>this.retdata = resp,
  (err:any)=>console.log("Errrorororrr")
  );
}
public puttest(){

let m = {
    "name": "Vaishali1111",
    "job": "Trainer111"
}
this.ss.putexample("https://reqres.in/api/users/2", m).subscribe(
  (resp:Response)=>this.retdata = resp,
  (err:any)=>console.log("Errrorororrr")
  );
}

public m1(pageno:number):void{
  this.ss.getdatafromserver(this.url+pageno).subscribe
  ((resp:Response)=>this.myobj = resp["data"],
  (err:any)=>console.log("Errrorororrr")
  );
}


 }
