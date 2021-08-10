import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCadastroComponent } from './page-cadastro.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextMaskModule } from 'angular2-text-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [PageCadastroComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports: [PageCadastroComponent]
})
export class PageCadastroModule { }
