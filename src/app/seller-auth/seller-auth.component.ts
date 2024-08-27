import { Component, OnInit } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { SellerService } from '../service/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {

  constructor(private seller:SellerService, private router: Router) { }

  ngOnInit(): void {
  }
  signUp(formData: any){
    debugger;
    console.warn(formData);
    this.seller.sendDataToJsonServer(formData);
    }
  }
