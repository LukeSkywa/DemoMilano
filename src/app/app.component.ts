import { Component, ViewChild } from '@angular/core';
import { PrimoComponent } from './primo/primo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoMilano';

  html= '<div>Ciao</div>';
  
  link = 'https://google.it';

  @ViewChild(PrimoComponent)
  private primoComponentRef: PrimoComponent;

  componentToShow = 2;


  constructor(){
  }

  checkViewChild(){
    if(this.primoComponentRef){
      this.primoComponentRef.incrementaSwitch();
    }
  }


}
