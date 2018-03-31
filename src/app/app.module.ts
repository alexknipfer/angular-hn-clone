import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { PostsComponent } from "./views/posts/posts.component";

import { DataService } from "./services/data.service";

@NgModule({
  declarations: [AppComponent, NavComponent, DefaultComponent, PostsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
