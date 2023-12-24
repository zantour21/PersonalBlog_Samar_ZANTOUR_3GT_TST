import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: any[] = [
    { id: 1, title: 'First Post', content: 'This is the first blog post.' },
    { id: 2, title: 'Second Post', content: 'Another interesting post.' }
  ];

  getPosts(): any[] {
    return this.posts;
  }

  getPostById(id: number): any {
    return this.posts.find(post => post.id === id || null);
  }

  addPost(post: any): void {
    const newId = this.posts.length + 1; // Calculate a new ID
    const newPost = { id: newId, ...post }; // Assign the new ID
    this.posts.push(newPost);
  }

  deletePost(postId: number): void {
    this.posts = this.posts.filter(post => post.id !== postId);
  }

  updatePost(updatedPost: any): void {
    // Find the post by ID in the posts array 
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
  }


}
