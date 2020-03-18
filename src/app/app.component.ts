import { Component, ViewChild } from '@angular/core';
import { PrimoComponent } from './primo/primo.component';
import { Persona } from './model/persona.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoMilano';

  html = '<div>Ciao</div>';

  link = 'https://google.it';

  primitivaInput: string = 'q';
  profiloInput: Persona = {
    nome: 'Luca', cognome: 'Alicata'
  }
  profilo1Input: Persona = {
    nome: 'Guglielmo', cognome: 'Alicata'
  }


  @ViewChild(PrimoComponent)
  private primoComponentRef: PrimoComponent;

  componentToShow = 3;


  constructor() {
  }

  modificaValori(){
    this.primitivaInput += 'asd';
    this.profiloInput.nome += 'asd';
    this.profilo1Input = {
      nome: 'Mario', cognome: 'Bianchi'
    }
  }

  checkViewChild() {
    if (this.primoComponentRef) {
      this.primoComponentRef.incrementaSwitch();
    }
    if (this.componentToShow === 4) {
      this.componentToShow = 1;
    } else {
      this.componentToShow++;
    }
  }


}
