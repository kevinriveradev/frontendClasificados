import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ControlUsuariosService } from '../control-usuarios.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-vista-registro',
    templateUrl: './vista-registro.component.html',
    styleUrls: ['./vista-registro.component.css']
})
export class VistaRegistroComponent implements OnInit {

    datosFormulario = new FormControl('');
    campoNombre = '';
    campoApellidos = '';
    campoClave = '';
    campoEmail = '';

    constructor(public usuarios: ControlUsuariosService, private router: Router) { }

    ngOnInit() {
    }

    registrar() {
        let nuevoUsuario = {
            nombre: this.campoNombre,
            apellidos: this.campoApellidos,
            clave: this.campoClave,
            email: this.campoEmail,
        }
        this.usuarios.crearUsuario(nuevoUsuario).subscribe(
            (error) => {
                console.log(error.status);
            }
        );
        
       
    }
}
