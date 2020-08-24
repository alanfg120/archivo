import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    InputTextareaModule,
    CalendarModule,
    FileUploadModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    DialogModule,
    TabViewModule,

  ],
})
export class NgprimeModule {}
