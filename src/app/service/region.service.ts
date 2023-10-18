import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { regionModel } from './region';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {


  constructor(
    private http:HttpClient
  ) { }

  //add order
//it is of any type
public getRegion():Observable<regionModel[]>
{

  return this.http.get<regionModel[]>("15.207.155.119:8080/api/region");
}
}
