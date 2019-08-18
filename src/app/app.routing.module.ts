import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  { 
    path: 'produto', 
    loadChildren: () => import('./modules/produto/produto.module').then(m => m.ProdutoModule)
  }
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
