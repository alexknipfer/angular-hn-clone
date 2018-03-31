import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'
import { Post } from '../../shared/models/post.model'
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]
  loading: boolean = true

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts: Post[]) => {
      this.loading = false
      this.posts = posts
    }, this.handleError)
  }

  handleError(error) {
    this.loading = false
    console.log('there was an error: ', error.message)
  }

  viewComments(postId) {
    const navigateExtras: NavigationExtras = {
      queryParams: { postId }
    }
    this.router.navigate(['comments'], navigateExtras)
  }
}
