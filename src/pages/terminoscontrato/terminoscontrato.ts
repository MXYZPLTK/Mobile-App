import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosempresaPage } from './../datosempresa/datosempresa';



@IonicPage()
@Component({
  selector: 'page-terminoscontrato',
  templateUrl: 'terminoscontrato.html',
})

@Component({
  selector: 'page-terminoscontrato',
  templateUrl: 'datosempresa.html'
})


export class TerminoscontratoPage {
  Aceptar = DatosempresaPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TerminoscontratoPage');
  }

}
