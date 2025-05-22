import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  // 👇 stand-alone components list their own imports
  imports: [CommonModule, RouterModule],
  styleUrls: ['./product-details.component.css'],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {

  product: Product | null = null;   // data to show
  loading = true;                   // simple spinner flag
  error: string | null = null;      // error message flag


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // read /details/:id from the URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // ask backend for that product
    this.productService.getById(id).subscribe({
      next: data => {
        this.product = data;
        this.loading = false;
      },
      error: err => {
        console.error('Error fetching product:', err);
        this.error = 'Unable to load product details.';
        this.loading = false;
      }
    });
  }
}
