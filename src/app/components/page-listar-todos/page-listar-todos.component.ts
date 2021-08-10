import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/app/services/pessoas.service';
import { ModalEditarComponent } from '../modal-editar/modal-editar.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Moment from 'moment';

@Component({
  selector: 'app-page-listar-todos',
  templateUrl: './page-listar-todos.component.html',
  styleUrls: ['./page-listar-todos.component.scss']
})
export class PageListarTodosComponent implements OnInit {
  
  constructor(public pessoasService: PessoasService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }
  
  displayedColumns: string[] = ['id', 'nome', 'email', 'celular', 'aniversario', 'actions'];
  
  moment = Moment;


  ngOnInit(): void {
    this.moment.locale('pt-br');
    this.getPessoas();
  }


  pessoas:any;
  async getPessoas() {
    try {
      let ret = await this.pessoasService.buscaPessoas();
      if(ret) {
        this.pessoas = ret;
        this.pessoas.forEach(p => {
          p.birth_at = this.formatData(p.birth_at);
        });
      }
    } catch (error) {
      this.openSnackBar('Erro ao buscar pessoas!')
      console.log('erro ao buscar pessoas', error)
    }
  }

  formatData(data) {
    let data_ = this.moment(data).format('DD/MM/YYYY')
    return data_;
  }

  editar(obj) {
    let t = obj;
    const modal = this.dialog.open(ModalEditarComponent, {
      panelClass: [],
      data: obj,
      width: '400px',
    });

    modal.afterClosed().subscribe(async ret => {
      if(ret) {
        this.pessoas = [];
        await this.getPessoas();
      }
    });

  }

  openSnackBar(msg) {
    this._snackBar.open(msg, 'Ok', {
      duration: 6000
    });
  }


}
