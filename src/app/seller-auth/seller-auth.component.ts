import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Seller } from '../model/seller.interface';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  toggle: boolean = true;
  authError: boolean = false;

  constructor(private sellerService: SellerService) {}

  ngOnInit(): void {
    this.sellerService.autoSignIn();
  }

  onToggle() {
    this.toggle = !this.toggle;
    this.authError = false;
  }

  signUp(data: Seller): void {
    this.sellerService.userSignUp(data);
  }

  logIn(data: Seller): void {
    this.sellerService.userLogIn(data);
    this.sellerService.isLogingError.subscribe((error) => {
      if (error) {
        this.authError = true;
      }
    });
  }
}
