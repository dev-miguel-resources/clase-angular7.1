import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'; //para nav tolbar
import { MatButtonModule } from '@angular/material/button'; //para tarjetas
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card'; //cartas
import { MatSnackBarModule } from '@angular/material/snack-bar'; //mensajes de alerta
import { MatDialogModule } from '@angular/material/dialog'; //para el modal de material
import { MatInputModule } from '@angular/material/input'; //para trabajar con inputs

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  exports: [ //como estoy exportando la clase necesito hacer este arreglo para que otra las detecte
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialModule { } //esto si lo tengo que importar en app.module
