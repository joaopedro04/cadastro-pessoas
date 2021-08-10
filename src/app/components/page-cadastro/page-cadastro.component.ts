import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MaskServiceService } from 'src/app/services/mask-service.service';
import { PessoasService } from 'src/app/services/pessoas.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-page-cadastro',
  templateUrl: './page-cadastro.component.html',
  styleUrls: ['./page-cadastro.component.scss']
})
export class PageCadastroComponent implements OnInit {

  name: FormControl;
  email: FormControl;
  phone: FormControl;
  birth_at: FormControl;

  loading: boolean;
  salvou: boolean = false;
  constructor(
    public pessoasService: PessoasService,
    public maskService:MaskServiceService,
    private _snackBar: MatSnackBar
  ) { 
    this.name = new FormControl('')
    this.email = new FormControl('')
    this.phone = new FormControl('')
    this.birth_at = new FormControl('')
  }
  
  ngOnInit(): void {
    
  }

  async salvarPessoa() {
    this.loading = true;
    let obj = {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      birth_at: this.birth_at.value
    }

    try {
      let ret = await this.pessoasService.salvaPessoa(obj)
      if(ret) {
        this.openSnackBar('Pessoa cadastrada com sucesso!')
        this.loading = false;
        this.salvou = true;

        if(this.salvou) {
          this.name = new FormControl('')
          this.email = new FormControl('')
          this.phone = new FormControl('')
          this.birth_at = new FormControl('')
        }
      }
    } catch(e) {
      this.openSnackBar('Erro ao cadastrar pessoa!')
      console.log('erro ao salvar pessoa', e)
    }
  }

  openSnackBar(msg) {
    this._snackBar.open(msg, 'Ok', {
      duration: 6000
    });
  }

}
