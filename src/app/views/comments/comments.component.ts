import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import { DataService } from '../../services/data.service'
import { Comment } from '../../shared/models/comment.model'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  postId: Observable<string>
  comments: Comment[]

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.postId = this.route.queryParamMap.map(
      params => params.get('postId') || 'None'
    )

    this.route.queryParams.subscribe(params => {
      this.postId = params['postId']
    })

    this.dataService
      .getCommentsByPostId(this.postId)
      .subscribe((comments: Comment[]) => (this.comments = comments))
  }
}
