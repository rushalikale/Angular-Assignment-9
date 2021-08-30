import { Component, OnInit } from '@angular/core';
import { NumberServiceService } from '../number-service.service';
import { StringServiceService } from '../string-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public num : number = 17;
  public name : string = "INDIA is my Country";
  public flag : boolean = false;
  public count : number = 0;

  //Injecting Number and String service using DI
  constructor(private _objNum : NumberServiceService, private _objStr : StringServiceService) 
  { }

  ngOnInit(): void 
  {
    //Calling method of service
    this.flag = this._objNum.chkPrime(this.num);
    this.count = this._objStr.CountCapital(this.name);
  }

}
