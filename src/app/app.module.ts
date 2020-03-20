import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CicloVitaComponent } from './ciclo-vita/ciclo-vita.component';
import { DemoRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    CicloVitaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DemoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
