import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { NavComponent } from './components/nav/nav.component'
import { DefaultComponent } from './layouts/default/default.component'
import { PostsComponent } from './views/posts/posts.component'

import { DataService } from './services/data.service'
import { LoaderComponent } from './components/loader/loader.component'
import { AppRoutingModule } from './app-routing.module'
import { UsersComponent } from './views/users/users.component'
import { CommentsComponent } from './views/comments/comments.component';
import { AddPostFormComponent } from './forms/add-post-form/add-post-form.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DefaultComponent,
    PostsComponent,
    LoaderComponent,
    UsersComponent,
    CommentsComponent,
    AddPostFormComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
