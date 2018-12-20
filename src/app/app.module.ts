import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaClasificadosComponent } from './lista-clasificados/lista-clasificados.component';
import { ControlAnunciosService } from './control-anuncios.service';
import { ControlUsuariosService } from './control-usuarios.service';
import { HttpClientModule } from '@angular/common/http';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { AppRoutingModule } from '../app/app-routing/app-routing.module';
import { VistaRegistroComponent } from './vista-registro/vista-registro.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaClasificadosComponent,
    AnuncioComponent,
    VistaRegistroComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule
  ],
  providers: [
      ControlAnunciosService,
      ControlUsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
