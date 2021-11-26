import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items = this.carrinhoService.retornarCarrinho();
  formEnvio = this.formBuilder.group({
    nome:'',
    endereco:''
  })
  constructor(private carrinhoService: CarrinhoService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.items = this.carrinhoService.limparCarrinho();
    console.warn('seu pedido foi submetido', this.formEnvio.value);
    this.formEnvio.reset();
  }
}
