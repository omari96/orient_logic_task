import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/posts/models/post.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id = this.router.snapshot.params.id;
  postData: Post[] = [];
  user: Object = {};
  constructor(
    private http: UserService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id: number) {
    this.http.getUser(id).subscribe((res: any) => {
      this.user = res;
      this.getUserPosts(res.id);
    })
  }

  getUserPosts(id: number) {
    this.http.getPostData(id).subscribe((res) => {
      this.postData = res as Post[]
    })
  }

}
