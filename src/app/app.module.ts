import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CicloVitaComponent } from './ciclo-vita/ciclo-vita.component';
import { DemoRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponent,
    SecondoComponent,
    CicloVitaComponent,
    MenuComponent,
    TemplateFormsComponent
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
