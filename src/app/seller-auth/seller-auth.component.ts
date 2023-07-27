import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Seller } from '../model/seller.interface';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  toggle: boolean = false;

  constructor(private sellerService: SellerService, private router: Router) {}

  ngOnInit(): void {
    this.sellerService.autoSignIn();
  }

  onToggle() {
    this.toggle = !this.toggle;
  }

  signUp(data: Seller): void {
    this.sellerService.userSignUp(data);
  }

  logIn(data: Seller): void {
    // this.sellerService.userLogIn(data);
  }
}
