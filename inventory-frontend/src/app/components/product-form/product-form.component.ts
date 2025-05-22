import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  styleUrls: ['./product-form.component.css'],
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  editing = false;
  productId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      quantityInStock: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      category: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editing = true;
      this.productId = +id;

      this.productService.getById(this.productId).subscribe({
        next: (product) => {
          this.productForm.patchValue(product);
        },
        error: () => alert('Failed to load product')
      });
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const formValue = this.productForm.value;

    if (this.editing && this.productId !== null) {
      this.productService.update(this.productId, formValue).subscribe({
        next: () => {
          alert('Product updated');
          this.router.navigate(['/']); // go back to list
        },
        error: () => alert('Update failed')
      });
    } else {
      this.productService.createProduct(formValue).subscribe({
        next: () => {
          alert('Product created');
          this.productForm.reset();
        },
        error: () => alert('Creation failed')
      });
    }
  }
}
