import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddPostFormComponent } from './add-post-form/add-post-form.component';
import { EditPostComponent } from './edit-post/edit-post.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'add-post', component: AddPostFormComponent },
  { path: 'edit-post/:id', component: EditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
