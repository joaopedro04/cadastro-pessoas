import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { PageListarTodosModule } from './components/page-listar-todos/page-listar-todos.module';
import { PageCadastroModule } from './components/page-cadastro/page-cadastro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    PageListarTodosModule,
    PageCadastroModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
