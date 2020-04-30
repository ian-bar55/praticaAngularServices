import { Injectable } from '@angular/core';
import { Pessoa } from './pessoas.model';

@Injectable({
  providedIn: 'root'
})

export class PessoasService {

  pessoasArray: Pessoa[] = this.getPessoas();

  getPessoas() {
    return [
      {
        "id": 0,
        "name": "Saunders Rosa",
        "idade": 23,
        "corOlhos": "brown",
        "sexo": "male",
        "email": "saundersrosa@eyewax.com"
      },
      {
        "id": 1,
        "name": "Mercer Vincent",
        "idade": 27,
        "corOlhos": "green",
        "sexo": "male",
        "email": "mercervincent@eyewax.com"
      },
      {
        "id": 2,
        "name": "Frederick Gonzales",
        "idade": 37,
        "corOlhos": "blue",
        "sexo": "male",
        "email": "frederickgonzales@eyewax.com"
      },
      {
        "id": 3,
        "name": "Nicholson Frank",
        "idade": 25,
        "corOlhos": "brown",
        "sexo": "male",
        "email": "nicholsonfrank@eyewax.com"
      },
      {
        "id": 4,
        "name": "Cox Reeves",
        "idade": 23,
        "corOlhos": "brown",
        "sexo": "male",
        "email": "coxreeves@eyewax.com"
      },
      {
        "id": 5,
        "name": "Bonnie Estrada",
        "idade": 35,
        "corOlhos": "green",
        "sexo": "female",
        "email": "bonnieestrada@eyewax.com"
      }
    ]
  }  
  getPessoa(id){
    return this.pessoasArray.find(x => x.id === id);
  }
  atualizarPessoa(id){
    console.log(id);
  }
  constructor() { }
}
