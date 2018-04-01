import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostsComponent } from './views/posts/posts.component'
import { UsersComponent } from './views/users/users.component'
import { CommentsComponent } from './views/comments/comments.component'
import { AddPostFormComponent } from './forms/add-post-form/add-post-form.component'

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'comments', component: CommentsComponent },
  { path: 'add-post', component: AddPostFormComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
