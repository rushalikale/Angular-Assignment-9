import { Component, OnInit } from '@angular/core';
import { ArithmaticService } from '../arithmatic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public addResult : number = 0;
  public subResult : number = 0;
  public num1 : number = 20;
  public num2 : number = 10;
  
  // Adding service using Dependency Injection
  constructor(private _arithObj : ArithmaticService) 
  { }

  ngOnInit(): void 
  {
    this.addResult = this._arithObj.add(this.num1,this.num2);
    this.subResult = this._arithObj.sub(this.num1,this.num2);
  }

}
