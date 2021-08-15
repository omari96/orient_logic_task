import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/posts/models/post.model';
import { PostService } from 'src/app/shared/service/post.service';
import { SharedFormService } from 'src/app/shared/service/shared-form.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  formGroup: FormGroup;
  id :number = this.router.snapshot.params.id;
  constructor(
    private formService: SharedFormService,
    private http: PostService,
    private router: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.currentPost(this.id)
  }

  UpdateUser() {
    const formData: Post = this.formGroup.value;
    const post: Post = {
      id: formData.id,
      title:formData.title,
      img: formData.img,
      description: formData.description,
      shortDescription: formData.shortDescription,
    }
    this.http.updateData(this.router.snapshot.params.id, post).subscribe((res) =>
      console.log(res)
    )
    this._location.back();
  }

  currentPost(id: number) {
    this.http.getCurrentData(id).subscribe((result: Post) => {
      this.formGroup = this.formService.buildUserForm(result)
    })
  }

}
