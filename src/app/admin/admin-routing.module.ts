import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AdminAddPostComponent } from './admin-add-post/admin-add-post.component';
import { AdminPostListComponent } from './admin-post-list/admin-post-list.component';
import { UpdatePostComponent } from './update-post/update-post.component';

export const routes: Route[] = [
  {
    path: '',
    component: AdminPostListComponent,
  },
  {
    path: 'add',
    component: AdminAddPostComponent,
  },
  {
    path: 'update/:id',
    component: UpdatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
