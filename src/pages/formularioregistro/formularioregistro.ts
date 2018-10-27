import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerminoscontratoPage } from '../terminoscontrato/terminoscontrato';


@IonicPage()
@Component({
  selector: 'page-formularioregistro',
  templateUrl: 'formularioregistro.html',
})
@Component({
  selector: 'page-formularioregistro',
  templateUrl: 'terminoscontrato.html'
})
export class FormularioregistroPage {

  terminoscontrato = TerminoscontratoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioregistroPage');
  }

}
