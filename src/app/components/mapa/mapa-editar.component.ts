import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

//data
import { FormBuilder, FormGroup } from '@angular/forms'; //otra libreria para trabajar con data


@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  forma: FormGroup; //creo el objeto de FormGroup

  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>, //defino el componente que tiene la data
    @Inject(MAT_DIALOG_DATA) public data: any) { //hqy que importar el inject

      console.log( data  ); //la info que recibo del padre
      this.forma = fb.group({
        'titulo': data.titulo, //especificamos el objeto tal cual lo queramos
        'desc' : data.desc
      });

    }

  ngOnInit() {
  }

  guardarCambios() {

    this.dialogRef.close(this.forma.value); //cierra el modal una vez ya enviada la información

  }

  onNoClick(): void {
    this.dialogRef.close(); //para cerrar el dialog
  }

}
