import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CicloVitaComponent } from './ciclo-vita/ciclo-vita.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const appRoutes: Routes = [
    { path: 'primo', component: PrimoComponent, data: {title: 'titolo'} },
    { path: 'primo-diverso', component: PrimoComponent, data: { title: 'Diverso' } },
    { path: 'secondo', component: SecondoComponent },
    { path: 'ciclo-vita', component: CicloVitaComponent },
    { path: 'template-form', component: TemplateFormsComponent },
    { path: 'reactive-form', component: ReactiveFormComponent },
    { path: '**', component: CicloVitaComponent },
    { path: '', redirectTo: '/primo', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule { }
