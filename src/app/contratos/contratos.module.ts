import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosRoutingModule } from './contratos-routing.module';
import { ContratosComponent } from './vistas/contratos/contratos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgprimeModule } from '../ngprime/ngprime.module';

@NgModule({
  declarations: [ContratosComponent],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    FormsModule,
    HttpClientModule,
    NgprimeModule
  ],
})
export class ContratosModule {}
