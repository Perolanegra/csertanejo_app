import { Injectable } from '@angular/core';
import { RestService } from '../core/rest.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ProdutoService {
    
    constructor(private restService: RestService) { }

    public obterTodos(): Observable<any> {
        return this.restService.get(`produto/obterTodos`);
    }

    public obterPorId(pId): Promise<any> {
        return new Promise((resolve, reject) => {
            this.restService.post(`produto/obterPorId`, pId).pipe(map(resp => resp)).subscribe(resp => {
                resolve(resp);
            }), (err) => {
                console.log('erro requisição: ', err);
                reject(err);
            }
        });
    }
}