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
import { ViewAllFriendsComponent } from './view-all-friends/view-all-friends.component';
import { ViewnavbarComponent } from './viewnavbar/viewnavbar.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddNavbarComponent } from './add-navbar/add-navbar.component';

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
  {
    path:"viewallfriends",
    component:ViewAllFriendsComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"employeereg",
    component:EmployeeRegComponent
  },
  {
    path:"addcourse",
    component:AddCourseComponent
  },
  {
    path:"addfriend",
    component:AddFriendComponent
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
    ViewAllCourseComponent,
    ViewAllFriendsComponent,
    ViewnavbarComponent,
    EmployeeLoginComponent,
    EmployeeRegComponent,
    AddCourseComponent,
    AddFriendComponent,
    AddNavbarComponent
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
