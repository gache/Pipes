import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importacion de la fecha para colocar la fecha en espagnol

import { LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe,

  ],
  imports: [
    BrowserModule,

  ],
  providers: [
    // { provide: LOCALE_ID, useValue: "es" } no sale en la pantalla voy hacer la pregunta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
