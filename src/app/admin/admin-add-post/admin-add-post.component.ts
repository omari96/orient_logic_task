import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostService } from 'src/app/shared/service/post.service';
import { SharedFormService } from 'src/app/shared/service/shared-form.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin-add-post',
  templateUrl: './admin-add-post.component.html',
  styleUrls: ['./admin-add-post.component.scss']
})
export class AdminAddPostComponent implements OnInit {

  formGroup : FormGroup

  constructor(
    private formService: SharedFormService,
    private http: PostService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formService.buildUserForm({
      id: null,
      title: '',
      img: '',
      description: '',
      shortDescription: '',
    });
  }

  addPost() {
    this.http.addPost(this.formGroup.value).subscribe((res) => {
    })
    this._location.back();
  }

}
