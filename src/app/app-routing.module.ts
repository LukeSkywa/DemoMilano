import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CicloVitaComponent } from './ciclo-vita/ciclo-vita.component';

const appRoutes: Routes = [
    { path: 'primo', component: PrimoComponent, data: {title: 'titolo'} },
    { path: 'primo-diverso', component: PrimoComponent, data: { title: 'Diverso' } },
    { path: 'secondo', component: SecondoComponent },
    { path: 'ciclo-vita', component: CicloVitaComponent },
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
