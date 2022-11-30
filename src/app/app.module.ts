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
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutusComponent,
    GalleryComponent,
    ContactComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
