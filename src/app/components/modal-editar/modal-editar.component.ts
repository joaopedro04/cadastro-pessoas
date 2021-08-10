import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MaskServiceService } from 'src/app/services/mask-service.service';
import { PessoasService } from 'src/app/services/pessoas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss']
})
export class ModalEditarComponent implements OnInit {
  
  name: FormControl;
  email: FormControl;
  phone: FormControl;
  birth_at: FormControl;

  loading:boolean;
  editou:boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public objEdit:any,
    public dialogRef: MatDialogRef<ModalEditarComponent>,
    private dialog: MatDialog,
    public pessoasService: PessoasService,
    public maskService:MaskServiceService,
    private _snackBar: MatSnackBar
  ) {
    this.name = new FormControl(this.objEdit.name ? this.objEdit.name : '')
    this.email = new FormControl(this.objEdit.email ? this.objEdit.email : '')
    this.phone = new FormControl(this.objEdit.phone ? this.objEdit.phone : '')
    this.birth_at = new FormControl(this.objEdit.birth_at ? this.objEdit.birth_at : '')
   }

  ngOnInit(): void { }

  async salvarEdicao() {
    this.loading = true;
    let obj = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      birth_at: this.birth_at.value
    }

    try {
      let ret = await this.pessoasService.editarPessoa(this.objEdit.id, obj);
      if(ret) {
        this.openSnackBar('Edição concluída com sucesso!')
        this.loading = false;
        this.editou = true;
      }
    } catch(e) {
      this.openSnackBar('Erro ao editar!')
      console.log('erro ao editar', e)
      this.loading = false;
    }

  }

  openSnackBar(msg) {
    this._snackBar.open(msg, 'Ok', {
      duration: 6000
    });
  }

  fechar() {
    this.dialogRef.close('fechou');
  }

}
