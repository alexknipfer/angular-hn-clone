import { Component, OnInit } from '@angular/core'
import { DataService } from '../../services/data.service'
import { User } from '../../shared/models/user.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[]
  loading: boolean = true

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe((users: User[]) => {
      this.loading = false
      this.users = users
    }, this.handleError)
  }

  handleError(error) {
    this.loading = false
    console.log('there was an error: ', error.message)
  }
}
