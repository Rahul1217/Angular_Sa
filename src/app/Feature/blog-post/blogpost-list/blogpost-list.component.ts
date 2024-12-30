import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { BlogPostService } from '../Services/blog-post.service';
import { Observable, Subscription } from 'rxjs';
import { BlogPost } from '../models/blog-post-model';

@Component({
  selector: 'app-blogpost-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blogpost-list.component.html',
  styleUrl: './blogpost-list.component.css'
})
export class BlogpostListComponent implements OnInit, OnDestroy {

  blogPost$?: Observable<BlogPost[]>;
  deleteBlogPostSubscription?: Subscription;

  constructor(private blogPostService: BlogPostService, private router: Router) {

  }

  ngOnInit(): void {
    this.blogPost$ = this.blogPostService.getAllBlogPosts();
  }
  
  onDelete(id: string): void {
    console.log(id);
    if (id) {
      this.deleteBlogPostSubscription = this.blogPostService.deleteBlogPost(id)
        .subscribe({
          next: (response) => {
            //this.router.navigateByUrl('/admin/categories');
            window.location.reload();
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.deleteBlogPostSubscription?.unsubscribe();
  }
}
