import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadoofertasPage } from './listadoofertas';

@NgModule({
  declarations: [
    ListadoofertasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadoofertasPage),
  ],
})
export class ListadoofertasPageModule {
  lista:Array<any>=[
    {
      imagen:"assets/imgs/coca cola.jpg",
      descripcion:"Coca cola",
      titulo:"cocacola",
    },

    {
      imagen:"assets/imgs/fanta.png",
      descripcion:"Fanta zul",
      titulo:"Fanta",
    },

    {
      imagen:"assets/imgs/sprite.png",
      descripcion:"sprite",
      titulo:"sprite",
    }
  ]

}
