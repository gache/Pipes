import { Component } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
nombre     = 'Erick';
nombre2    = 'eRIck enRIque franco delgado'

arreglo    = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


PI         = Math.PI;


porcentaje = 0.234;


salario    = 1234.5;

heroe = {
  nombre    : 'Logan',
  clave     : 'Wolverine',
  edad      :  500,
  dirreccion:{
  calle     : 'Primera',
  casa      : '19'
  }

};


valorDePromesa = new Promise( (resolve, reject) => {
setTimeout(() => resolve('Llego la data'), 3500 );
})

fecha = new Date();

video = "mOeSfOJrUIk";

activar: boolean = true;


}
