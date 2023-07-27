import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../model/seller.interface';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  userSignUp(data: Seller) {
    return this.http
      .post('http://localhost:3000/seller', data, {
        observe: 'response',
      })
      .subscribe((response) => {
        this.isLoggedIn.next(true);
        this.router.navigate(['/seller-home']);
      });
  }
}
