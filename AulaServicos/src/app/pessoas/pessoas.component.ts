import { Component, OnInit, Output } from '@angular/core';
import { Pessoa } from '../pessoas.model';
import { PessoasService } from '../pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})

export class PessoasComponent implements OnInit {

  pessoas: Pessoa[];
  detalhePessoa: boolean = false;
  pessoa: Pessoa;

  constructor(private pessoasService: PessoasService) { }

  ngOnInit(): void {
    this.pessoas = this.pessoasService.getPessoas();
  }

  alterarNomePessoa(dadosPessoa){
    if(dadosPessoa.id !== null && dadosPessoa.name !== null)
      this.pessoas.forEach(x => x.name = x.id === dadosPessoa.id ? dadosPessoa.name : x.name);
    else
      return;
  }
  
  detalhe(id){
    this.detalhePessoa = true;
    this.pessoa = this.pessoasService.getPessoa(id);
  }
}
