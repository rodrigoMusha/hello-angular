import { Component, OnInit } from '@angular/core';
import { Produto, produtos} from '../produtos';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'descricao', 'preco', 'estoque'];
  produtos = produtos;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let cat =Number(params.get('cat'));
      if(cat){
        this.produtos = produtos.filter(function(p){
            return p.categoria == cat;
        })
       } else{
        this.produtos=produtos;
      }
    })
  }

}
