import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/map';
@Injectable()
export class SimpleService 
{
    constructor(private http:Http){
    }
    public getdatafromserver(url:string):Observable<Object>
    {
        return this.http.get(url).map((resp:Response)=>resp.json());
    }
    public postexample(url:string,data:Object):Observable<Object>{
        return this.http.post(url,data);
    }
     public putexample(url:string,data:Object):Observable<Object>{
        return this.http.put(url,data);
    }
}