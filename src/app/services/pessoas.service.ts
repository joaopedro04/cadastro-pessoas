import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  URL = 'https://forassetapi.herokuapp.com/people';


  buscaPessoas() {
    return this.http.get(this.URL).toPromise();
  }

  salvaPessoa(data) {
    return this.http.post(this.URL, data).toPromise();
  }

  editarPessoa(id, data) {
    delete data.id;
    return this.http.patch(this.URL + `/${id}`, data).toPromise();
  }
}
