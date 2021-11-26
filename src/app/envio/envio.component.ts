import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
export class EnvioComponent implements OnInit {

  custosEntrega = this.carrinhoService.obterPrecoEntrega();
  constructor(private carrinhoService:CarrinhoService) { }

  ngOnInit(): void {
  }

}
