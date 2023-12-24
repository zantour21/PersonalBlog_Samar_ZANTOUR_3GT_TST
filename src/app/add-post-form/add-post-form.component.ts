import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss']
})
export class AddPostFormComponent {
  newPost: any = { title: '', content: '' };

  constructor(private postService: PostService) { }

  onSubmit(): void {
    this.postService.addPost(this.newPost);
    this.newPost = { title: '', content: '' }; // Reset form fields after adding the post
  }
}

