import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../model/seller.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SellerLogin } from '../model/sellerLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLogingError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data: Seller) {
    return this.http
      .post('http://localhost:3000/seller', data, {
        observe: 'response',
      })
      .subscribe((response) => {
        this.isLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(response.body));
        this.router.navigate(['/seller-home']);
      });
  }

  autoSignIn() {
    if (localStorage.getItem('seller')) {
      this.isLoggedIn.next(true);
      this.router.navigate(['/seller-home']);
    }
  }

  userLogIn(data: SellerLogin) {
    return this.http
      .get(
        'http://localhost:3000/seller?email=' +
          data.email +
          '&password=' +
          data.password,
        {
          observe: 'response',
        }
      )
      .subscribe((response: any) => {
        if (response) {
          if (response.body.length === 0) {
            this.isLogingError.emit(true);
            return;
          }
          this.isLoggedIn.next(true);
          localStorage.setItem('seller', JSON.stringify(response.body));
          this.router.navigate(['/seller-home']);
        }
      });
  }
}
