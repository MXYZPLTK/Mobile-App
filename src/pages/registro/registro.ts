
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TerminoscontratoPage } from './../terminoscontrato/terminoscontrato';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
@Component({
  selector: 'page-registro',
  templateUrl: 'terminoscontrato.html'
})


export class RegisterPage {
  Registrarse = TerminoscontratoPage;
  constructor(public navCtrl: NavController) {

  }

}
