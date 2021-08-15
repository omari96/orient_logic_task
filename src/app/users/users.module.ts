import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [UserListComponent, UserDetailsComponent ]
})
export class UsersModule { }
