import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Feature/category/category-list/category-list.component';
import { AddCategoryComponent } from './Feature/category/add-category/add-category.component';
import { EditCategoryComponent } from './Feature/category/edit-category/edit-category.component';
import { BlogpostListComponent } from './Feature/blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './Feature/blog-post/add-blogpost/add-blogpost.component';
import { NgModule } from '@angular/core';
import { EditBlogpostComponent } from './Feature/blog-post/edit-blogpost/edit-blogpost.component';
import { HomeComponent } from './Feature/public/home/home.component';
import { BlogDetailComponent } from './Feature/public/blog-detail/blog-detail.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'blog/:url',
        component:BlogDetailComponent
    },
    {
        path:'admin/categories',
        component:CategoryListComponent
    },
    {
        path:'admin/categories/add',
        component:AddCategoryComponent
    },
    {
        path:'admin/categories/:id',
        component:EditCategoryComponent
    },
    {
        path:'admin/blogposts',
        component:BlogpostListComponent
    },
    {
        path:'admin/blogposts/add',
        component:AddBlogpostComponent
    },
    {
        path:'admin/blogposts/:id',
        component:EditBlogpostComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
