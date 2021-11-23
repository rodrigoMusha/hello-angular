import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Produto } from '../produtos';

@Component({
  selector: 'app-alertas-produto',
  templateUrl: './alertas-produto.component.html',
  styleUrls: ['./alertas-produto.component.css']
})
export class AlertasProdutoComponent implements OnInit {

  @Input() produto!: Produto;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
