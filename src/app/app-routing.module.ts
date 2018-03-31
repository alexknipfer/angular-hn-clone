import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostsComponent } from './views/posts/posts.component'
import { UsersComponent } from './views/users/users.component'
import { CommentsComponent } from './views/comments/comments.component'

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'comments', component: CommentsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
