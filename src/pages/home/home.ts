import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../registro/registro';
import { IngresarPage } from '../ingresar/ingresar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Component({
  selector: 'page-home',
  templateUrl: 'registro.html'
})
@Component({
  selector: 'page-home',
  templateUrl: 'ingresar.html'
})

export class HomePage {

  registro = RegisterPage;
  ingresar = IngresarPage;
  constructor(public navCtrl: NavController) {
  }


}




