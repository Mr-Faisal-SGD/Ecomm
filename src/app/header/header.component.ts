import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'buyer';
  sellerName: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (localStorage.getItem('seller') && event.url.includes('seller')) {
          // this.router.navigate(['/seller-home']);
          this.menuType = 'seller';
          let sellerStore = localStorage.getItem('seller');
          if (sellerStore) {
            let seller = JSON.parse(sellerStore)[0];
            this.sellerName = seller.name;
          }
        } else this.menuType = 'buyer';
      }
    });
  }

  logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }

}
