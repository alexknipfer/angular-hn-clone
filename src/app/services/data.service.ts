import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class DataService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com/'

  constructor(public http: HttpClient) {}

  getPosts() {
    const apiUrl = this._getApiUrl('posts')
    return this.http.get(apiUrl)
  }

  _getApiUrl(urlSegment: string) {
    return `${this.baseUrl}${urlSegment}`
  }
}
