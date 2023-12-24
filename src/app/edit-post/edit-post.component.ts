import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service'; 

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit{
  postId!: number;
  post: any = {
    title: '',
    content: ''
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = +params['id']; // Retrieve the postId from the route parameter

      // Getting the specific post using the postId
      this.post = this.postService.getPostById(this.postId); // Implement getPostById in your PostService
    });
  }

    // Function to update the post with modified content
    updatePost(): void {
      this.postService.updatePost(this.post); 
      this.router.navigate(['/posts']); // Redirect to the post list page after updating
    }


}
