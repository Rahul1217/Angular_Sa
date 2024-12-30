import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageService } from './image.service';
import { response } from 'express';
import { Observable } from 'rxjs';
import { BlogImage } from '../../Model/blog-image.model';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css'
})
export class ImageSelectorComponent implements OnInit {

  private file?:File;
  filename: string='';
  title: string='';
  images$?: Observable<BlogImage[]>; 

  @ViewChild('form',{static : false}) imageUploadForm?:NgForm;

  constructor(private imageService: ImageService){

  }
  ngOnInit(): void {
    this.getimages();
  }
  onFileUploadChange(event :Event):void{
    const element=event.currentTarget as HTMLInputElement;
    this.file=element.files?.[0];

  }
  uploadImage():void{
    if(this.file && this.filename!=='' && this.title!==''){
      this.imageService.uploadImage(this.file,this.filename,this.title)
      .subscribe({
        next:(response)=>{
          this.imageUploadForm?.resetForm();
          this.getimages();
        }
      });
    }
  }
  selectImage(image: BlogImage): void {
    this.imageService.selectImage(image);
  }
  private getimages(){
    this.images$=this.imageService.getAllImages();
  }


}
