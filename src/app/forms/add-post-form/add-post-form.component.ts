import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {
  addPostForm: FormGroup

  ngOnInit() {
    this.addPostForm = new FormGroup({
      title: new FormControl(),
      body: new FormControl(),
      userId: new FormControl()
    })
  }

  // constructor() { }

  addPost() {
    const { title, body, userId } = this.addPostForm.controls
    console.log('ADD POST VALUES!', title.value, body.value, userId.value)
  }
}
