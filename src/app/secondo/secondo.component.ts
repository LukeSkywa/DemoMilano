import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-secondo',
  templateUrl: './secondo.component.html',
  styleUrls: ['./secondo.component.scss']
})
export class SecondoComponent implements OnInit {
  @Output()
  clickEvent: EventEmitter<string> = new EventEmitter();


  titolo = 'iniziale';

  constructor() { }

  ngOnInit(): void {
  }

  inputEvent(event) {
    this.titolo = event.target.value;
  }

  gestioneClick(event) {
    console.log('ciao');
    this.clickEvent.emit(this.titolo);
    this.titolo = 'dopo click';

  }

}
