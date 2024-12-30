import { Component, OnInit } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
import { BlogPostService } from '../Services/blog-post.service';
import { Router } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CategoryService } from '../../category/Services/category.service';
import { Observable } from 'rxjs';
import { category } from '../../category/Model/category-model';

@Component({
  selector: 'app-add-blogpost',
  standalone: true,
  imports: [
    FormsModule
    ,DatePipe
    ,MarkdownModule
    ,CommonModule
  ],
  templateUrl: './add-blogpost.component.html',
  styleUrl: './add-blogpost.component.css'
})

export class AddBlogpostComponent implements OnInit {
  model:AddBlogPost;
  categoryes$?: Observable<category[]>;

  constructor(private blogPostService: BlogPostService,private router:Router,private categoryService:CategoryService){
    this.model={
      title:'',
      author:'',
      content:'',
      featuredImageUrl:'',
      isVisible:true,
      publishedDate:new Date(),
      shortDescription:'',
      urlHandle:'',
      categories:[]
    }
  }
  ngOnInit(): void {
    this.categoryes$=this.categoryService.getAllcategories();
  }

  onFormSubmit(): void {
    console.log(this.model);
    this.blogPostService.createBlogPost(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/blogposts');
      }
    });
  }

}
