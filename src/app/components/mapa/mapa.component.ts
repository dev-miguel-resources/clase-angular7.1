import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class'; //importo el Marcador
import { MatSnackBar } from '@angular/material'; //para los mensajes inferiores
import { MatDialog, MatDialogRef } from '@angular/material'; //para mensajes de dialogo
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = []; //creo  un arreglo tipo Marcador

  lat = -33.419039;
  lng = -70.559074;

  constructor( public snackBar: MatSnackBar,
               public dialog: MatDialog ) {

    if ( localStorage.getItem('marcadores') ) { //si existen marcadores los cargo
      this.marcadores = JSON.parse(localStorage.getItem('marcadores')); //guarda un string perfecto
    }

  }

  ngOnInit() {
  }


  agregarMarcador( evento ) { //evento al ticlear mapa

    const coords: { lat: number, lng: number } = evento.coords; //asignarle un tipo

    const nuevoMarcador = new Marcador( coords.lat, coords.lng );

    this.marcadores.push( nuevoMarcador );

    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', { duration: 3000 }); //para marcadores de mensajes

  }

  borrarMarcador( i: number ) {

    this.marcadores.splice(i, 1); //de que posición parto y de cuantas borro
    this.guardarStorage(); //despues de borrar guardo el storage
    this.snackBar.open('Marcador borrado', 'Cerrar', { duration: 3000 });
  }

  editarMarcador( marcador: Marcador ) {

    const dialogRef = this.dialog.open( MapaEditarComponent , {
      width: '250px',
      data: { titulo: marcador.titulo, desc: marcador.desc } //info que quiero mandar
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');//nos subscribimos para mostrar el resultado

      if ( !result ) { //si el result esta vacío no hace nada, el objeto que maneja el modal
        return;
      }
      //si viene la guardo, actualizando el marcador
      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      this.guardarStorage(); //guardo en el storage
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 3000 });

    });

  }


  guardarStorage() {

    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ) );

  }

}
