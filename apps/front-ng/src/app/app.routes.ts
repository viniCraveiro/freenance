import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'stock', loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)},
  {path: 'cripto', loadChildren: () => import('./cripto/cripto.module').then(m => m.CriptoModule)},
  {path: 'card', loadChildren: () => import('./card/card.module').then(m => m.CardModule)},
];
