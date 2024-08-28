import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { signin, signup } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  ErrMsgDisplaylogin: String = "";

  showloginform: boolean = false;

  constructor(private sellerService:SellerService, private router: Router) { }

  ngOnInit(): void {
    this.sellerService.reloadSeller();
  }
  signUp(formData: signup){
    console.warn(formData);
        this.sellerService.sendSignupDataToJsonServer(formData);
  }
  login(formData: signin){
    this.sellerService.sendSginInFormDataToServer(formData);
    this.sellerService.isloginError.subscribe((isError)=>{
      console.warn(isError);
      
      if (isError) {
        this.ErrMsgDisplaylogin = "Username or Password incorrect!"
      }
      
    })
  }

  directToLoginForm(){
    console.log("show login form");
    this.showloginform = true;
  }
  directToSignupForm(){
    console.log("show Signup form");
    this.showloginform = false;
  }
}
