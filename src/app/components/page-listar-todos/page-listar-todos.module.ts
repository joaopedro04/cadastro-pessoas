import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListarTodosComponent } from './page-listar-todos.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ModalEditarModule } from '../modal-editar/modal-editar.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PageListarTodosComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    ModalEditarModule,
    MatCardModule
  ],
  exports: [PageListarTodosComponent]
})
export class PageListarTodosModule { }
