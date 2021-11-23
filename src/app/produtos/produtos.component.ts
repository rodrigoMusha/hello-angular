import { Component, OnInit} from '@angular/core';
import { Produto, produtos} from '../produtos';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos= produtos;

  constructor(private route: ActivatedRoute) {
  }

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

  compartilhar(){
    alert("compartilhado")
  }

  onNotify(produto: Produto){
    alert("Voce sera avisado por email quando o preço baixar:"+produto.nome)
  }
}
