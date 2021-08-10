import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarComponent } from './modal-editar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';





@NgModule({
  declarations: [ModalEditarComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: [ModalEditarComponent]
})
export class ModalEditarModule { }
