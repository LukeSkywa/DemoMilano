import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router;
import { PrimoComponent } from './primo/primo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { CicloVitaComponent } from './ciclo-vita/ciclo-vita.component';

const appRoutes: Routes = [
    { path: 'primo', component: PrimoComponent },
    { path: 'secondo', component: SecondoComponent },
    { path: 'ciclo-vita', component: CicloVitaComponent }
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
