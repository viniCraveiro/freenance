import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'stock', loadChildren: () => import('./pages/stock/stock.component').then(m => m.StockComponent) },
  { path: 'cripto', loadChildren: () => import('./pages/cripto/cripto.component').then(m => m.CriptoComponent) },
];
