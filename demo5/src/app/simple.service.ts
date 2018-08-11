import {Injectable} from '@angular/core';
@Injectable()
export class SimpleService 
{
    constructor(){
        console.log("SimpleService Constructor");
    }
    public m1():void{
        console.log("m1 invoked ");
    }
}