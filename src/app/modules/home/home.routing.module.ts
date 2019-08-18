import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ObterProdutosResolver } from '../produto/resolvers/obterProdutos.service';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        component: HomeComponent,
        resolve: {
            produtos: ObterProdutosResolver
        },
        // canActivate: [true],
        // runGuardsAndResolvers: 'always'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ObterProdutosResolver
  ]
})

export class HomeRoutingModule { }
