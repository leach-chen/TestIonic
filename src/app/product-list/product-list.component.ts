import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  constructor(private router:Router){}

  goTest() {
    this.router.navigate(['/test/'])
  }
}

