import { Component, OnInit } from '@angular/core';
import { StringServiceService } from '../string-service.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  public count : number = 0;
  public name : string = "MARVELLOUS Infosystem";
  //Injecting String service using DI
  constructor(private objStr : StringServiceService) { }

  ngOnInit(): void 
  {
    //call CountCapital() of string service to count capital letter in give string
    this.count = this.objStr.CountCapital(this.name);
  }

}
