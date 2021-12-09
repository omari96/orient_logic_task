import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/users/models/user.model';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss']
})
export class FormViewComponent implements OnInit {
  userData: User[] = [];

  constructor(private http: UserService) { }
  @Input() formGroup: FormGroup;

  ngOnInit(): void {
    this.fillUser()
  }

  fillUser() {
    this.http.getUsers().subscribe((res: User[]) => {
      this.userData = res;
    });
  }
}
