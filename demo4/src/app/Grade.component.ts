import { Component, Input, OnInit,OnChanges ,SimpleChanges } from '@angular/core';
//import {Input} from '@angular/core'

@Component({
  selector: 'grade-app',
  templateUrl: './grade.html'
})
export class GradeComponent implements OnInit, OnChanges
{
    ngOnChanges(changes: SimpleChanges): void {
      console.log("on changes ");
      console.log(changes);
    if (this.marks > 35 )
      this.grade="Pass";
    else
      this.grade  ="Fail";
    }

    ngOnInit(): void {
      console.log("ngOnIniit" + this.marks);
       if (this.marks > 35 )
      this.grade="Pass";
    else
      this.grade  ="Fail";
    }

 @Input()  marks:number= 50;
     grade:string="";
  constructor(){
    console.log("in con " + this.marks);
   
  }   
  }
