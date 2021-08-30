import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringServiceService {

  constructor() { }
  CountCapital(name : string) : number
  {
    var count : number = 0;
    for(var i = 0 ; i < name.length ; i++)
    {
      var reg  = /[A-Z]/;
      var c = name[i].search(reg);
      if(c != -1)
      {
        count++;
      }
    }
    return count;
  }
}
