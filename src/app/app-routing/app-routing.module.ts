import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListaClasificadosComponent } from '../lista-clasificados/lista-clasificados.component';
import { VistaRegistroComponent } from '../vista-registro/vista-registro.component';

const routes: Routes = [
    {
        path: '',
        component: ListaClasificadosComponent
    },
    {
        path: 'registro',
        component: VistaRegistroComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
