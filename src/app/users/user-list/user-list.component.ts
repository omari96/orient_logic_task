import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userData: User[] = [];

  constructor( private http: UserService) { }

  ngOnInit() {
    this.fillUser();
  }

  fillUser() {
    this.http.getUsers().subscribe((res: User[]) => {
      this.userData = res;
    });
  }

}
