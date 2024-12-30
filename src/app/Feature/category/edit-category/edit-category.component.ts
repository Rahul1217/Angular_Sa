import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryService } from '../Services/category.service';
import { category } from '../Model/category-model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateCategory } from '../Model/UpdateCategoryModel';

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent implements OnInit,OnDestroy{

id?:string | null=null;
paramsSubscription?:Subscription;
category?:category;

  constructor(private route: ActivatedRoute
    ,private categoryService: CategoryService
    ,private router:Router
  ){

  }

  ngOnInit(): void {
    this.paramsSubscription=this.route.paramMap.subscribe({
      next:(params)=>{
        this.id=params.get('id');
        if(this.id){
          // get data from api
            this.categoryService.getcategoriesByID(this.id).subscribe({
            next:(response)=>{
              this.category=response;

            }

            });
        }
      }
    });
  }
  onFormSubmit():void{
    const UpdateCategory: UpdateCategory={
      name:this.category?.name??'',
      urlHandle:this.category?.urlHandle??''

    }
    if(this.id){
      this.categoryService.updatecategories(this.id,UpdateCategory)
      .subscribe({
        next:(response)=>{
          this.router.navigateByUrl('/admin/categories')
        }
      });
      console.log(this.category);
    }
  }
  onDelete():void{
    if(this.id)
    {
      this.categoryService.deletecategories(this.id)
      .subscribe({
        next:(response)=>{
          this.router.navigateByUrl('/admin/categories');
        }
      });
    }
  }
  ngOnDestroy(): void {
    this.paramsSubscription?.unsubscribe();
  }
}
