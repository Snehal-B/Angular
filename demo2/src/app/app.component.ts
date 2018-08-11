import { Component } from '@angular/core';
import {Emp} from './Emp'
@Component({
  selector: 'my-app',
  templateUrl: './emp.html'
})
export class AppComponent  {
   e:Emp = new Emp();
   count:number=0;
   editflag:boolean  = false;
   editflagcheck():boolean{
     return this.editflag;
   }
  
  constructor(){
    for(let i = 1; i<5;i++){
      let e  = new Emp();
      e.empno = i; e.ename="nameof"+i; e.salary=i*1000;
    this.emparr.push(e);
    }
    
  }
   emparr:Array<Emp> = new Array();
   public add():void{
     this.emparr.push(this.e);
     this.e = new Emp();
   }
    public remove(ind:number):void{
        this.emparr.splice(ind,1);
    }
    public save():void{
      this.emparr[this.count].empno = this.e.empno;
      this.emparr[this.count].ename = this.e.ename
      this.emparr[this.count].salary = this.e.salary
      this.editflag = false;
      this.e = new Emp();
    }
      public revert():void{
          this.editflag = false;
          this.e = new Emp();
    }
     public edit(ind:number):void{
       this.count = ind;
      this.e = new Emp();
      this.e.empno = this.emparr[ind].empno;
      this.e.ename = this.emparr[ind].ename;
      this.e.salary = this.emparr[ind].salary;
      this.editflag = true;
    }
}
