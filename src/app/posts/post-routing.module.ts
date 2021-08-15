import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsListComponent } from './posts-list/posts-list.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts'
  },
  {
    path: 'posts',
    component: PostsListComponent,
  },
  {
    path: 'posts/details/:id',
    component: PostDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
