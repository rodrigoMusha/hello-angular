import { Injectable } from '@angular/core';
import { Produto } from './produtos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  items: Produto[]= [];
  constructor(private http : HttpClient) {
   }

  obterPrecoEntrega(){
    return this.http.get<{tipo:string, preco:number}[]>('/assets/entrega.json')
  }


  inserirNoCarrinho(produto:Produto){
    this.items.push(produto);
  }

  retornarCarrinho(){
    return this.items;
  }

  limparCarrinho(){
    this.items =[];
    return this.items;
  }
}
