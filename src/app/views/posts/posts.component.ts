import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'

interface IPost {
  userId: number
  id: number
  title: string
  body: string
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[]

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService
      .getPosts()
      .subscribe((posts: IPost[]) => (this.posts = posts))
  }
}