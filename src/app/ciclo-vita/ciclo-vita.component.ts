import { Component, OnInit, SimpleChanges, OnDestroy, OnChanges, Input, DoCheck } from '@angular/core';
import { Persona } from '../model/persona.interface';

@Component({
  selector: 'app-ciclo-vita',
  templateUrl: './ciclo-vita.component.html',
  styleUrls: ['./ciclo-vita.component.scss']
})
export class CicloVitaComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input()
  primitiva: string;
  @Input()
  profilo: Persona;
  @Input()
  profilo1: Persona;

  inputVar: string;

  private nomeProfiloPrecedente: string;
  
  constructor() { 
    console.log('constructor: ' + this.primitiva);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      console.log('changes: ' + JSON.stringify(changes));

      if (changes['primitiva'] != null && changes['primitiva'].previousValue !== changes['primitiva'].currentValue
        && !changes['primitiva'].firstChange) {
        console.log('è stato modificato primitiva');
      }
      if (changes['profilo'] != null && changes['profilo'].previousValue !== changes['profilo'].currentValue
        && !changes['profilo'].firstChange) {
        console.log('è stato modificato profilo');
      }
      if (changes['profilo1'] != null && changes['profilo1'].previousValue !== changes['profilo1'].currentValue
        && !changes['profilo1'].firstChange) {
        console.log('è stato modificato profilo1');
      }
    }
  }

  ngOnInit(): void {
    console.log('oninit: ' + this.primitiva);
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
    if(this.nomeProfiloPrecedente !== this.profilo.nome){
      console.log('è stata modifica la proprietà nome di profilo');
      this.nomeProfiloPrecedente = this.profilo.nome;
    }
  }

  ngOnDestroy(): void {
    console.log('onDestroy: ' + this.primitiva);
  }

}
