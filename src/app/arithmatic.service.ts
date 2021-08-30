import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmaticService {

  constructor() { }
  //Provide Addition 
  add(a : number , b : number) : number
  {
    return (a+b);
  }

  //Provide Substration
  sub(a : number , b : number) : number
  {
    return (a-b);
  }
}
