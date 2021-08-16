import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/posts/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class SharedFormService {

  constructor() { }

  buildUserForm(result: Post) {

    return new FormGroup({
      userId: new FormControl(result['userId'], [Validators.required]),
      id: new FormControl(result['id'], [Validators.required]),
      title: new FormControl(result['title'], [Validators.required]),
      img: new FormControl(result['img']),
      description: new FormControl(result['description'], [Validators.required]),
      shortDescription: new FormControl(result['shortDescription'], [Validators.required]),
    })

  }



}
