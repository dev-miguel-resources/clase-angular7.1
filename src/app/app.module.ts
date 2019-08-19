import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//para trabajar con las animaciones de angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';





import { AgmCoreModule } from '@agm/core'; //para angular maps
import { ReactiveFormsModule } from '@angular/forms'; //para trabajar por data

@NgModule({
  entryComponents: [
    MapaEditarComponent //uno de los componentes que se puede inyectar como un parametro en un modal
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, //la importamos
    MaterialModule, //registro la clase MaterialModule
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
