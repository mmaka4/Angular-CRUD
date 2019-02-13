import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private username = "";
  private fullname = "";
  private password = "";

  constructor(private service : HttpService, private router : Router) { }

  ngOnInit() {
  }

  onClickRegister(){
    let user = {
      "username": this.username,
      "fullname": this.fullname,
      "password": this.password
    }

    this.service.registerUser(user).subscribe(response => {
      console.log(response);

      this.router.navigate(['/']);
    })
    
  }

}
