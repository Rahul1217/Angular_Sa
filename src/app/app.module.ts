import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { MarkdownModule } from "ngx-markdown";


@NgModule({
declarations:[
],
imports:[
    BrowserModule,
    CommonModule,
    MarkdownModule.forRoot()
],
providers:[

],
bootstrap: []
})
export class AppModule { }