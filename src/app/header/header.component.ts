import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'buyer';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if (localStorage.getItem('seller')) {
          this.router.navigate(['/seller-home']);
          this.menuType = 'seller';
        } else this.menuType = 'buyer';
      }
    });
  }
}
