import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageListarTodosComponent } from './components/page-listar-todos/page-listar-todos.component';
import { PageCadastroComponent } from './components/page-cadastro/page-cadastro.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/listar-todos'
  },
  {
    path: 'listar-todos',
    component: PageListarTodosComponent
    
  },
  {
    path: 'cadastrar',
    component: PageCadastroComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
