import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../shared/models/user.model'
import { Observable } from 'rxjs/Observable'
import { Post } from '../shared/models/post.model'
import { Comment } from '../shared/models/comment.model'

@Injectable()
export class DataService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor(public http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const apiUrl = this._getApiUrl('posts')
    return this.http.get<Post[]>(apiUrl)
  }

  addPost(post: Post): Observable<Post> {
    const apiUrl = this._getApiUrl('posts')
    return this.http.post<Post>(apiUrl, JSON.stringify(post))
  }

  getUsers(): Observable<User[]> {
    const apiUrl = this._getApiUrl('users')
    return this.http.get<User[]>(apiUrl)
  }

  getCommentsByPostId(postId): Observable<Comment[]> {
    const apiUrl = this._getApiUrl(`comments/?postId=${postId}`)
    return this.http.get<Comment[]>(apiUrl)
  }

  _getApiUrl(urlSegment: string) {
    return `${this.baseUrl}${urlSegment}`
  }
}
