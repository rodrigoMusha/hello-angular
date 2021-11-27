import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { categorias, produtos } from '../produtos';
import {Location} from '@angular/common';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorias = categorias;
  cat:number|undefined;
  vitrine!:string;
  produtos=produtos;
  items = this.carrinhoService.retornarCarrinho();

  constructor(private router: Router, private location: Location, private carrinhoService : CarrinhoService) {
  router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      this.items = this.carrinhoService.retornarCarrinho();
      let url =event.url.split("/");
      
      if(!this.cat){
        this.cat =0;
      }
      if(url.includes("list")){
        this.vitrine="list";
        this.cat=Number(url[url.length-1]);
      } else if(url.includes("grid")){
        this.vitrine="card"
        this.cat=Number(url[url.length-1]);
      } else {
        this.cat =0;
      }
      }
    })
  }
  selectCat(id:number){
    if(this.vitrine=="card"){
      this.router.navigate(["./grid",id]);
    } else{
      this.router.navigate(["./list",id]);
    }
  }


  ngOnInit(): void {  
  }

  onValChange(val: string) {
    this.vitrine = val;
    if(this.vitrine=="card"){
      this.router.navigate(["./grid",this.cat]);
    } else{
      this.router.navigate(["./list",this.cat]);
    }
  }


}
