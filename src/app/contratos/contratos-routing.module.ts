import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContratosComponent } from './vistas/contratos/contratos.component';


const routes: Routes = [
  {
    path: '',
    component: ContratosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosRoutingModule { }
