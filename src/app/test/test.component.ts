import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `<div class="test-special">
                Inline Test Template
              </div>

              <div class="test-danger">
                Inline Test Template
              </div>

              <div [class.test-danger]="hasError">
                Inline Test Template
              </div>
              
              <h2 [class]="successClass">
                Welcome, {{ user }}!
              </h2>

              <!-- property binding -->
              <input [disabled]="isDisabled" [id]="myId" type="text" value="Suleiman">
              
              <!-- interpolation: works only with string values -->
              <input disabled="{{ isDisabled }}" id="{{ myId }}" type="text" value="Suleiman">
              
              <!-- Multi class binding: more than one class on an element -->
              <h2 [ngClass]="messageClasses">
                Welcome, {{ user }}!
              </h2>

              <!-- Style binding -->
              <h2 [style.color]="'orange'">
                Style Binding!
              </h2>

              <!-- Style binding with condition -->
              <h2 [style.color]="hasError ? 'red' : 'green'">
                Style Binding With Condition!
              </h2>

              <!-- Style binding with property -->
              <h2 [style.color]="highlightColor">
                Style Binding With Property!
              </h2>

              <!-- Multi style binding -->
              <h2 [ngStyle]="titleStyles">
                Multi Style Binding!
              </h2>

              <button (click)="onClickHola()"> Hola </button>
              <br>
              {{ greeting }}
              <br>

              <!-- Event listener with event param that contain all property of DOM event -->
              <button (click)="onClickEvent($event)"> Event Button </button>
              <br>
              {{ eventLog }}

              `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public user = "Ali";
  public myId = "inputName"
  public isDisabled = false;
  public successClass = "test-success";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public greeting = "";
  public eventLog = "";

  public messageClasses = {
    "test-success": !this.hasError,
    "test-danger": this.hasError,
    "test-special": this.isSpecial
  }

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  onClickHola(){
    console.log('Hola button clicked!')
    this.greeting = "Hola! Welcome to AngularBasics."
  }

  onClickEvent(event){
    console.log(event);
    this.eventLog = event.type;
  }

}
