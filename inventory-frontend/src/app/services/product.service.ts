import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}
  private productAddedSource = new BehaviorSubject<Product | null>(null);
  productAdded$ = this.productAddedSource.asObservable();

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product).pipe(
      tap((newProduct) => this.productAddedSource.next(newProduct))
    );
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getById(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  update(id: number, product: Product) {
    return this.http.put(`${this.apiUrl}/${id}`, product);
  }

}
