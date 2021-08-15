import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/models/post.model';
import { PostService } from 'src/app/shared/service/post.service';

@Component({
  selector: 'app-admin-post-list',
  templateUrl: './admin-post-list.component.html',
  styleUrls: ['./admin-post-list.component.scss']
})
export class AdminPostListComponent implements OnInit {
  postData: Post[] = [];
  p: number = 1;
  constructor(private http: PostService) { }

  ngOnInit(): void {
    this.fillPost();
  }

  fillPost() {
    this.http.getPosts().subscribe((res: Post[]) => {
      this.postData = res;
    });
  }

  deletePost(id: Post) {
    this.http.deletePost(id).subscribe(() => {
      this.fillPost();
    })
  }

}
