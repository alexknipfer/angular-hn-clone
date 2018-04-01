import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent {
  submitted: boolean = false

  // constructor() { }

  onSubmit() {
    this.submitted = true
  }
}
