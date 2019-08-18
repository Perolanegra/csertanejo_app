import { Component } from '@angular/core';
import { AppController } from '../../core/appController';
import { TelaPadrao } from '../../core/telaPadrao';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './listaProduto.component.html',
  styleUrls: ['./listaProduto.component.scss'],
})
export class ListaProdutoComponent extends TelaPadrao {

  constructor(public appController: AppController, protected route: ActivatedRoute) {
    super(route);
  }

  public get arrayCuscuz() {
    return '';
  }

}

