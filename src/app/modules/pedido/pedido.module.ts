import { PedidoService } from './pedido.service';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
    imports: [
        SharedModule,
        IonicModule
    ],
    declarations: [ // Components 
        
    ],
    providers: [ // Services
        PedidoService
    ],
    entryComponents: [ // Components
        
    ]
    
})

export class PedidoModule { }