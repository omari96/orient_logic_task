import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { UserRoutingModule } from './post-routing.module';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    NgxPaginationModule

  ],
  declarations: [
    PostsListComponent,
    PostDetailsComponent,
    CommentComponent
  ],
})
export class PostsModule { }
