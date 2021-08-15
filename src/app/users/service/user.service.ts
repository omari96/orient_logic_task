import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/Users/";
  urlPost: string = "http://localhost:3000/Posts/";

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  getUser(id:number){
    return this.http.get(`${this.url}` + `${id}`)
  }

  getPostData(id: number) {
    return this.http.get(`${this.urlPost}` + `?userId=${id}`)
  }




}
