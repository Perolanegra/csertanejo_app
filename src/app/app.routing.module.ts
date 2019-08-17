import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule)
  },
  // { 
  //   path: 'pedido', 
  //   loadChildren: () => import('./modules/pedido/pedido.module').then(m => m.PedidoModule)
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
