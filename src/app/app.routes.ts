import { Routes } from '@angular/router';
import { CategoryListComponent } from './Feature/category/category-list/category-list.component';
import { AddCategoryComponent } from './Feature/category/add-category/add-category.component';

export const routes: Routes = [
    {
        path:'admin/categories',
        component:CategoryListComponent
    },
    {
        path:'admin/categories/add',
        component:AddCategoryComponent
    }
];
