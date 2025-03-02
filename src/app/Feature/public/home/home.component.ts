import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../blog-post/Services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/blog-post-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  blogs$?: Observable<BlogPost[]>;
  constructor(private blogpostservice: BlogPostService ){

  }
  ngOnInit(): void {
   this.blogs$ = this.blogpostservice.getAllBlogPosts();
  }
}
