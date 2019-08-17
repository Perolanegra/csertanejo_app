import { ResolverPadrao } from 'src/app/shared/resolvers/resolverPadrao';
import { Injectable } from '@angular/core';
import { ProdutoService } from './produto.service';
import { map } from 'rxjs/operators';

@Injectable()
export class ObterProdutosResolver extends ResolverPadrao {
    constructor(private produtoService: ProdutoService) { 
        super();
    }

    resolver(pParams: any) {
        return this.produtoService.obterTodos().pipe(map(pResp => pResp));
    }
}