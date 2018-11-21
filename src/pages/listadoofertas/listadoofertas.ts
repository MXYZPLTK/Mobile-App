import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListadoofertasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listadoofertas',
  templateUrl: 'listadoofertas.html',
})
export class ListadoofertasPage {
  Lista:Array<any>=[
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoofertasPage');
  }

}
