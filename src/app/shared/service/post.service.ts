import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../posts/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Posts/";
  urlComments: string = "http://localhost:3000/Comments/";

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  getCurrentData(id: number) {
    return this.http.get(`${this.url}` + `${id}`)
  }

  getCurrentCommentData(id: number) {
    return this.http.get(`${this.urlComments}` + `${id}`)
  }

  addPost(post: Post) {
    return this.http.post(`${this.url}`, post)
  }

  updateData(id: number, data: Post) {
    return this.http.put(`${this.url}` + `${id}`, data)
  }

  deletePost(post: Post) {
    return this.http.delete(`${this.url}/${post.id}`)
  }

}
