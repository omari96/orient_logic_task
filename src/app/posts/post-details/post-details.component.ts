import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  currentPostData: Post[]= [];
  id = this.router.snapshot.params.id;
  constructor(
    private http: PostService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.detailPost(this.id);
  }

  detailPost(id: number) {
    this.http.getCurrentData(id).subscribe((result) => {
      this.currentPostData.push(result as Post)
    })
  }


}
