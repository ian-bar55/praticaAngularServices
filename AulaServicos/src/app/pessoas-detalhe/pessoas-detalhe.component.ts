import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { Pessoa } from '../pessoas.model';

@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {

  @Output() alteracaoPessoa = new EventEmitter();
  @Input() recebePessoa;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
  }

  atualizarDadosPessoa(){
    let mock: Pessoa = {
      id: this.recebePessoa.id,
      name: "Alterado da Silva",
      idade: null,
      corOlhos: null,
      sexo: null,
      email: null   
    };    
    this.alteracaoPessoa.emit(mock);
    this.pessoasService.atualizarPessoa(mock.id);
  }
}
