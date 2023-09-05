import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../model/product.interface';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  productList: product[] = [];

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.update();
  }

  onDelete(id: number) {
    this.product.deleteProduct(id).subscribe(res => {
      if (res) {
        this.update();
      }
    });
  }

  update() {
    this.product.getProducts().subscribe((res) => {
      this.productList = res;
    });
  }
}
