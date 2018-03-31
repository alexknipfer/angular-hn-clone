import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../shared/models/user.model'
import { Observable } from 'rxjs/Observable'
import { Post } from '../shared/models/post.model'

@Injectable()
export class DataService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor(public http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const apiUrl = this._getApiUrl('posts')
    return this.http.get<Post[]>(apiUrl)
  }

  getUsers(): Observable<User[]> {
    const apiUrl = this._getApiUrl('users')
    return this.http.get<User[]>(apiUrl)
  }

  _getApiUrl(urlSegment: string) {
    return `${this.baseUrl}${urlSegment}`
  }
}
