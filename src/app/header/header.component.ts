import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { categorias, produtos } from '../produtos';
import {Location} from '@angular/common';

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

  constructor(private router: Router, private location: Location) {
  router.events.subscribe(event=>{
    if(event instanceof NavigationEnd){
      let url =event.url.split("/");
      this.cat=Number(url[url.length-1]);
      if(!this.cat){
        this.cat =0;
      }
      if(url.includes("list")){
        this.vitrine="list"
      } else {
        this.vitrine="card"
      }
      }
    })
  }
  selectCat(id:number){
    if(this.vitrine=="card"){
      this.router.navigate(["./",id]);
    } else{
      this.router.navigate(["./list",id]);
    }
  }


  ngOnInit(): void {  
  }

  onValChange(val: string) {
    this.vitrine = val;
    if(this.vitrine=="card"){
      this.router.navigate(["./",this.cat]);
    } else{
      this.router.navigate(["./list",this.cat]);
    }
  }


}
