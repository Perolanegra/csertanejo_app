import { AppController } from './appController';
import { Router, ActivatedRoute } from '@angular/router';

export abstract class TelaPadrao {
    private _registros;

    constructor(protected appController: AppController,
    protected router: Router, route: ActivatedRoute) {
        // super(route);
    }

    get registros() {
        return this._registros;
    }

    set registros(pParams: any) {
        // this.respResolvers.registros = pParams;
    }

    //Metodo que mostra o nome do objeto no autocomplete
    obterNomeItem(pItem) {
        if (pItem) { return pItem.nome; }
    }

    abstract obterRotaAtual();

}