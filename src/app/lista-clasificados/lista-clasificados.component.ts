import { Component, OnInit } from '@angular/core';
import { ControlAnunciosService } from '../control-anuncios.service';

@Component({
  selector: 'lista-clasificados',
  templateUrl: './lista-clasificados.component.html',
  styleUrls: ['./lista-clasificados.component.css']
})
export class ListaClasificadosComponent implements OnInit {

  titulo: string;
  productos: Array<any>;

  constructor(public anuncios: ControlAnunciosService) { }

  ngOnInit() {
    this.titulo = "Listado de anuncios";
      this.anuncios.getUsers().subscribe((res) => this.productos = res);
      console.log(this.productos);
  }

 

}
