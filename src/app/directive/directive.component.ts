import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  condition: boolean = true;
  color: string = null;
  listaSemplice: string[] = ['Pippo', 'Pluto', 'Paperino'];

  constructor() { }

  ngOnInit(): void {
  }

  toggleColorVar() {
    if (this.color != null && this.color !== '') {
      this.color = null;
    } else {
      this.color = 'blue';
    }
  }

}
