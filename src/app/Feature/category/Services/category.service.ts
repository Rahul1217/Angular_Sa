import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Addcategoryrequist } from '../Model/add-category-requist-model';
import { category } from '../Model/category-model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  addcategory(model: Addcategoryrequist): Observable<void> {

    return this.http.post<void>(`${environment.apiBaseUrl}/api/Categories`, model);
  } 

  getAllcategories(): Observable<category[]>{

    return this.http.get<category[]>(`${environment.apiBaseUrl}/api/Categories`);
  }
}
