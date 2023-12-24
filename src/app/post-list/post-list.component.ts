import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts: any[] = [];

  constructor(private postService: PostService, private router: Router) {
    this.posts = this.postService.getPosts();
  }

  deletePost(postId: number): void {
    this.postService.deletePost(postId);
    this.posts = this.postService.getPosts(); // Update posts after deletion
  }

  modifyPost(postId: number): void {
    this.router.navigate(['/edit-post', postId]); //Redirecting to the Edit form page
  }
}
