import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  dialog = false;
  uploadedFiles: any[] = [];
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Datos del Contrato', icon: 'pi pi-fw pi-home'},
      {label: 'Subir Archivos', icon: 'pi pi-fw pi-calendar'},
    ];
  }

  addContrato(form: NgForm) {
    console.log(form);
  }
  onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }
  }
}
