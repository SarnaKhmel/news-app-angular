import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {News} from '../models/api-news.model'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

constructor( private http: HttpClient) { }

getNews(): Observable<News> {
  return this.http
  .get<News>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3159b85d9e534e0b82e9e340e1821b61')
}

}
