import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Creating component using angular Cli command
import { DemoComponent } from './demo/demo.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ChildComponent } from './child/child.component';

//Creating Service using Angular Cli command

//Arithmatic Service
import {ArithmaticService} from './arithmatic.service';

//Number Service
import { NumberServiceService } from './number-service.service';

//String Service
import { StringServiceService } from './string-service.service';


@NgModule({
  declarations: [
    AppComponent, DemoComponent, Child1Component, Child2Component, ChildComponent],
  imports: [
    BrowserModule
  ],
  providers: [ArithmaticService, NumberServiceService, StringServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
