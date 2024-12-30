import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogPostService } from '../../blog-post/Services/blog-post.service';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/blog-post-model';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule,RouterModule,MarkdownModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {

  url: string | null = null;
  blogpost$?: Observable<BlogPost>;
  
  constructor(private route: ActivatedRoute,
    private blogpostservice: BlogPostService
  ){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        this.url=params.get('url')
      }
    });

    if(this.url){
        this.blogpost$=this.blogpostservice.getBlogPostByUrlHandle(this.url);
    }
  }


}
