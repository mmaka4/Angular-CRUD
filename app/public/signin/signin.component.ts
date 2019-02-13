import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  title: number;

  constructor() { }

  ngOnInit() {
    this.sum();
  }

  sum(){
    const num1 = 10;
    const num2 = 10;
    this.title = num1+ num2;
    return this.title;
  }

}
