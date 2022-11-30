import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private route:Router){}
  username=""
  password=""

  readValues=()=>{
    if(this.username=="admin"&&this.password=="nestdigital"){
      this.route.navigate(["/viewallcourse"])
    }else{
      alert("Not a valid credentials")
    }
  }
}
