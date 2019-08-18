import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProdutoService } from './produto.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ObterOutroResolver implements Resolve<any> {

    constructor(private produtoService: ProdutoService) {

    }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<any> {

        console.log('chego no resolver agora: ');
        return this.produtoService.obterTodos().pipe(map(resp => resp));
    }
}