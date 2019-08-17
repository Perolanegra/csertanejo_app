import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppController } from '../../core/appController';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './listaProduto.component.html',
  styleUrls: ['./listaProduto.component.scss'],
})
export class ListaProdutoComponent {


  constructor(public navCtrl: NavController, public appController: AppController) {
    
  }

  public get arrayCuscuz() {
    return '';
  }

}

