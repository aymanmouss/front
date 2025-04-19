import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { CreatePostRequest, Post } from '../../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private apiservice: ApiService) {}

  getPosts() {
    return this.apiservice.get<Post[]>('/posts');
  }

  postPost(post: CreatePostRequest) {
    return this.apiservice.post<Post>('/posts', post);
  }

  putPost(post: Post) {
    return this.apiservice.put<Post>(`/posts/${post.id}`, post);
  }
}
