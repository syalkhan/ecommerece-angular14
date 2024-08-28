import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { signin, signup } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  isUserLogin = new BehaviorSubject<boolean>(false);
  storeIsUserLoing!: any;
  isloginError = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  sendSignupDataToJsonServer(data: signup){
    return this.http.post('http://localhost:3000/seller', data, {observe: 'response'}).subscribe(res=>{
     if(res){
      this.isUserLogin.next(true);
      localStorage.setItem("login", JSON.stringify(this.isUserLogin));
      this.router.navigate(['sellerhome']);
     }
        });
  }

  // Send data from login form to json server and get the record.
 sendSginInFormDataToServer(data: signin){
  return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, {observe: 'response'})
  .subscribe((result:any)=>{
    if (result && result.body && result.body.length == 1) {
      this.isUserLogin.next(true);
      localStorage.setItem("login", JSON.stringify(this.isUserLogin));
      this.router.navigate(['sellerhome']);
    }else{
      this.isloginError.emit(true);
    }
  })
 }


    reloadSeller(){
      if( localStorage.getItem('login') ){
        console.log("calling getItem in reloadSeller in service");
        this.isUserLogin.next(true);
        this.router.navigate(['sellerhome']);
      }
    }
}
