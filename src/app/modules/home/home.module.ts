import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListaProdutoComponent } from './listaProduto/listaProduto.component';
import { HomeComponent } from './home.component';
import { ProdutoService } from '../produto/produto.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { ObterProdutosResolver } from '../produto/resolvers/obterProdutos.resolver';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, // *
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          produtos: ObterProdutosResolver
        }
      }
    ])
  ],
  declarations: [
    HomeComponent,
    ListaProdutoComponent
  ],
  providers: [
    ProdutoService,
    ObterProdutosResolver
  ]
})

export class HomeModule { }
