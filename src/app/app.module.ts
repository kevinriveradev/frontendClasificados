import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaClasificadosComponent } from './lista-clasificados/lista-clasificados.component';
import { ControlAnunciosService } from './control-anuncios.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListaClasificadosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ControlAnunciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
