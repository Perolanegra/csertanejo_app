import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  // { 
  //   path: 'pedido', 
  //   loadChildren: () => import('./modules/pedido/pedido.module').then(m => m.PedidoModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' }) //preloadingStrategy: PreloadAllModules, 
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
