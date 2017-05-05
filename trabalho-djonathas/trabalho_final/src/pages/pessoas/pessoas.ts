import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NovaPessoaPage } from '../nova-pessoa/nova-pessoa';

/**
 * Generated class for the Pessoas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-pessoas',
  templateUrl: 'pessoas.html',
})
export class PessoasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  goToNovo() {
    this.navCtrl.push(NovaPessoaPage);
  }
}