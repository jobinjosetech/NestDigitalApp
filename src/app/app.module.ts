import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllCourseComponent } from './view-all-course/view-all-course.component';

const myRoutes:Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"about",
    component:AboutusComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"viewallcourse",
    component:ViewAllCourseComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutusComponent,
    GalleryComponent,
    ContactComponent,
    NavbarComponent,
    AdminLoginComponent,
    ViewAllCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
