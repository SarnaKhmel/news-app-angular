import { Component, OnInit } from '@angular/core';
import { News } from '../models/api-news.model';
import { NewsService } from '../services/news.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  newsData: News | null = null;

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next:(response) => {
         this.newsData = response;
        console.log(response);
      }
    })
  }

}
