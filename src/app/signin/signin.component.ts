import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

   username = "";
   password = "";

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onClickSignIn(){
    let response = this.http.signIn(this.username, this.password);
    console.log('response: ' + response);
  }

  onClick(){
    this.http.getUsers().subscribe(response => {
      console.log(response);
    })
  }

}
