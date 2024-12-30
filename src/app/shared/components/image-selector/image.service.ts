import { Injectable } from '@angular/core';
import { every, Observable,BehaviorSubject } from 'rxjs';
import { BlogImage } from '../../Model/blog-image.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  selectedImage: BehaviorSubject<BlogImage> = new BehaviorSubject<BlogImage>({
    id: '',
    fileExtenstion: '',
    fileName: '',
    title: '',
    url: ''
  });

  constructor(private http:HttpClient) { }

  uploadImage(file: File,fileName: string,title:string):Observable<BlogImage>
  {
    const fromData=new FormData();
    fromData.append('file',file);
    fromData.append('fileName',fileName);
    fromData.append('title',title);
    
    return this.http.post<BlogImage>(`${environment.apiBaseUrl}/api/Images`,fromData);
  }
  selectImage(image: BlogImage): void {
    this.selectedImage.next(image);
  }
  getAllImages():Observable<BlogImage[]>{
    return this.http.get<BlogImage[]>(`${environment.apiBaseUrl}/api/Images`)
  }
  onSelectImage(): Observable<BlogImage> {
    return this.selectedImage.asObservable()
  }

}
