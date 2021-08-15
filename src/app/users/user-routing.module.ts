import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Route[] = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
