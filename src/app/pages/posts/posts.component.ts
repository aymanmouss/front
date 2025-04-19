import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { ArticleCardComponent } from '../../shared/components/article-card/article-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [ArticleCardComponent, MatGridListModule, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  columns: number = 2;

  articles: Post[] = [
    {
      id: 1,
      authorId: 1,
      topicId: 1,
      title: 'Post 1',
      content:
        "lorem ipsum is simply of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled...",
      createdAt: new Date(),
    },
  ];

  constructor() {
    // Responsive columns based on window width
    this.setGridColumns(window.innerWidth);
    window.addEventListener('resize', () => {
      this.setGridColumns(window.innerWidth);
    });
  }

  setGridColumns(width: number): void {
    if (width < 768) {
      this.columns = 1;
    } else if (width < 1200) {
      this.columns = 2;
    } else {
      this.columns = 3;
    }
  }
}
