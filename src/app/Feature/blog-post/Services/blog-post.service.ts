import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddBlogPost } from '../models/add-blog-post';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { BlogPost } from '../models/blog-post-model';
import { UpdateBlogPost } from '../models/update-blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  constructor(private http:HttpClient) { }

 createBlogPost(data: AddBlogPost):Observable<BlogPost>{
    return this.http.post<BlogPost>(`${environment.apiBaseUrl}/api/BlogPosts`,data);
 } 

 getAllBlogPosts():Observable<BlogPost[]>{
  return this.http.get<BlogPost[]>(`${environment.apiBaseUrl}/api/BlogPosts`);
 }
 getBlogPostById(id: string): Observable<BlogPost> {
  return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
}
getBlogPostByUrlHandle(UrlHandle: string): Observable<BlogPost> {
  return this.http.get<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${UrlHandle}`);
}
updateBlogPost(id: string, updatedBlogPost: UpdateBlogPost): Observable<BlogPost> {
  return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`, updatedBlogPost);
  //return this.http.put<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}?addAuth=true`, updatedBlogPost);
}
deleteBlogPost(id: string): Observable<BlogPost> {
  return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}`);
 // return this.http.delete<BlogPost>(`${environment.apiBaseUrl}/api/blogposts/${id}?addAuth=true`);
}

}
