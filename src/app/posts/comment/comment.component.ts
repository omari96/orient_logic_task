import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/service/post.service';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  commentData: Comment[] = [];
  id: number = this.router.snapshot.params.id;

  constructor(
    private http: PostService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getComment(this.id)
  }

  getComment(id: number) {
    this.http.getCurrentCommentData(id).subscribe((res: Comment) => {
      this.commentData.push(res)
    })
  }

}
