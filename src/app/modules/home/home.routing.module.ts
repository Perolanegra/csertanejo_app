import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ObterOutroResolver } from '../produto/obterOutro.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        component: HomeComponent,
        resolve: {
            produtos: ObterOutroResolver
        },
        // canActivate: [true],
        runGuardsAndResolvers: 'always'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // ObterProdutosResolver
    ObterOutroResolver
  ]
})

export class HomeRoutingModule { }
