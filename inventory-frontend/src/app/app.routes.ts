import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    loadComponent: () =>
      import('./components/product-list/product-list.component').then(m => m.ProductListComponent),
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./components/product-form/product-form.component').then(m => m.ProductFormComponent),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./components/product-form/product-form.component').then(m => m.ProductFormComponent),
  },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./components/product-details/product-details.component').then(m => m.ProductDetailsComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
