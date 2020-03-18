import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  @Output('eventoClick')
  clickEvent: EventEmitter<string> = new EventEmitter();

  mostraRosso: boolean = false;

  titolo = 'iniziale';

  get oggettoClassi() {
    return {
      prova: this.mostraRosso,
      altro: !this.mostraRosso
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  inputEvent(target) {
    this.titolo = target.value;
  }

  gestioneClick(event) {
    console.log('ciao');
    this.clickEvent.emit(this.titolo);
    this.titolo = 'dopo click';
    this.mostraRosso = !this.mostraRosso;
  }

}
