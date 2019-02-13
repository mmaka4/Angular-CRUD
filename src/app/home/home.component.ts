import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Object;
  private usersObservable : Observable<any[]>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    // start query automatically
    this.getUsersFromService()
  }

  private getUsersFromService(){
    this.httpService.getUsers().subscribe(data => {
      console.log('getUser request completed!');
      data = {
        "data": data
      }
      this.users = data;
      console.log(this.users);
    })
  }

  onClickRefreshList(){
    this.getUsersFromService()
  }

  onClickDeleteUser(username){
    console.log('User to delete: ' + username);
    this.httpService.deleteUser(username).subscribe(respose => {
      console.log(respose);

      this.users = [];
      this.getUsersFromService();
    })

  }
}
