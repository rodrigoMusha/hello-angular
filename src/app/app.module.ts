import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AlertasProdutoComponent } from './alertas-produto/alertas-produto.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component'
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';



@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    HeaderComponent,
    FooterComponent,
    AlertasProdutoComponent,
    DetalhesProdutoComponent,
    ListaProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTableModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
