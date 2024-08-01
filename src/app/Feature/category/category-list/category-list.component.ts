import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../Services/category.service';
import { response } from 'express';
import { category } from '../Model/category-model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories$?: Observable<category[]>;

  constructor(private categoryservice: CategoryService){

  }

  ngOnInit(): void {
    this.categories$=this.categoryservice.getAllcategories();
  }
}
