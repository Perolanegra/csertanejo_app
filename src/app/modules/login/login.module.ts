import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutenticacaoService } from './autenticacao.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule, // *
    IonicModule, // *
    RouterModule.forChild([ // Se chamar pelo módulo é => *
      {
        path: '',
        component: LoginComponent
      }
    ])
  ],
  providers: [
    AutenticacaoService
  ]
})

export class LoginModule { }
