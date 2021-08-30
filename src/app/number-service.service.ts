import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberServiceService {

  constructor() { }
  chkPrime(num : number) : boolean
  {
    var flag : boolean = false;
    for(var i = 2 ; i < num/2 ; i++)
    {
      if(num%i === 0)
      {
        flag = true;
      }
    }
    return flag;
  }
}
