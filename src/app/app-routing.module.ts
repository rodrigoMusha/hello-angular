import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { EnvioComponent } from './envio/envio.component';

const routes: Routes =  [
  {path:'produtos/:idProduto', component: DetalhesProdutoComponent},
  {path:'grid', component: ProdutosComponent},
  {path:'list/:cat', component: ListaProdutosComponent},
  {path:'grid/:cat', component: ProdutosComponent},
  {path:'carrinho', component: CarrinhoComponent},
  {path:'envio', component: EnvioComponent},
];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
