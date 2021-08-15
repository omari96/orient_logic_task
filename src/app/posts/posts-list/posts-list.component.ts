import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../../shared/service/post.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  id: number = this.router.snapshot.params.id
  postData: Post[] = [];
  p: number = 1;

  constructor(
    private http: PostService,
    private router: ActivatedRoute, ) { }

  ngOnInit() {
    this.fillPost();

  }
  fillPost() {
    this.http.getPosts().subscribe((res: Post[]) => {
      this.postData = res;
    });
  }

}
