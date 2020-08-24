import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SidebarModule} from 'primeng/sidebar';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './vistas/home/home.component';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule

  ]
})
export class HomeModule { }
