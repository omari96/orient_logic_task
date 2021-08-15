import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Posts/";

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  getCurrentData(id: number) {
    return this.http.get(`${this.url}` + `${id}`)
  }

}
