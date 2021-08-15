import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { UserRoutingModule } from './post-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,

  ],
  declarations: [
    PostsListComponent,
    PostDetailsComponent
  ],
})
export class PostsModule { }
