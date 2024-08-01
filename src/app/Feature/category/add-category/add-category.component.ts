import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Addcategoryrequist } from '../Model/add-category-requist-model';
import { CategoryService } from '../Services/category.service';
import { response } from 'express';
import { error } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnDestroy {

  model: Addcategoryrequist;
  private addcategorySubsceription?: Subscription;

  constructor(private categoryservice: CategoryService){
    this.model={
      name:'',
      urlhandle:''
    }
  }
  
  onFormSubmit(){
    this.addcategorySubsceription=this.categoryservice.addcategory(this.model)
    .subscribe({
      next:(response)=>{
          console.log('this was successfull');
    }
  });
  }
  ngOnDestroy(): void {
    this.addcategorySubsceription?.unsubscribe();
  }
}
