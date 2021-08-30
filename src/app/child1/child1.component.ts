import { Component, OnInit } from '@angular/core';
import { NumberServiceService } from '../number-service.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit 
{
  public retFlag : boolean = false;
  public num : number = 29;
  //Inject NubmerService using DI(Dependency Injection)
  constructor(private obj : NumberServiceService) 
  { }

  ngOnInit(): void 
  {
    this.retFlag = this.obj.chkPrime(this.num);
  }

}
