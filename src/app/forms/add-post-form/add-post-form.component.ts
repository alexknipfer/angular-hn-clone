import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { DataService } from '../../services/data.service'
import { Post } from '../../shared/models/post.model'

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {
  addPostForm: FormGroup

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.addPostForm = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      userId: new FormControl()
    })
  }

  addPost() {
    const post = {
      title: String(this.addPostForm.controls.title),
      body: String(this.addPostForm.controls.body),
      userId: Number(this.addPostForm.controls.userId)
    }

    this.dataService.addPost(post).subscribe(
      (post: Post) => {
        console.log('POST ADDED: ', post)
      },
      error => console.log('ERROR: ', error)
    )
  }
}
