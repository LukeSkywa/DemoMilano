import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona.interface';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  condition: boolean = true;
  color: string = null;
  listaSemplice: string[] = ['Pippo', 'Pluto', 'Paperino'];
  listaDiOggetti: Persona[] = [{nome: 'Luca', cognome: 'Alicata', id: 1},{nome: 'Mario', cognome: 'Biondi', id: 2}, {nome: 'Marco', cognome: 'Rossi', id: 3}];

  constructor() { }

  ngOnInit(): void {
  }

  trackByNominativo(oggetto: Persona) {
    return oggetto.nome+oggetto.cognome+oggetto.id;
  }

  toggleColorVar() {
    if (this.color != null && this.color !== '') {
      this.color = null;
    } else {
      this.color = 'blue';
    }
  }

}
