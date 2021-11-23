import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';

const routes: Routes =  [
  {path:'', component: ProdutosComponent},
  {path:'list/:cat', component: ListaProdutosComponent},
  {path:':cat', component: ProdutosComponent},
  {path:'produtos/:idProduto', component: DetalhesProdutoComponent}
];
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
