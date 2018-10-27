import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SubirofertasPage } from './../subirofertas/subirofertas';


@IonicPage()
@Component({
  selector: 'page-ingresar',
  templateUrl: 'ingresar.html',
})
@IonicPage()
@Component({
  selector: 'page-ingresar',
  templateUrl: 'subirofertas.html',
})
export class IngresarPage {
  ingresar = SubirofertasPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresarPage');
  }

}
