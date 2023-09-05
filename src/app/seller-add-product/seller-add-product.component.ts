import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../model/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  productMessage: boolean = false;

  constructor(private product: ProductService, private router: Router) {}

  submit(data: product) {
    this.product.addProduct(data).subscribe((res) => {
      if (res) {
        this.productMessage = true;
      }
    });
  }

  onAdd() {
    this.productMessage = false;
  }

  onNavigate() {
    this.router.navigate(['/seller-home']);
  }
}
