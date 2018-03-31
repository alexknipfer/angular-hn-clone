import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'
import { Post } from '../../shared/models/post.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[]
  loading: boolean = true

  constructor(private dataService: DataService) {}

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
}
