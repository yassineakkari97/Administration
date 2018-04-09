import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ATvPage } from '../a-tv/a-tv';
import { AInfoPage } from '../a-info/a-info';
import { AElecPage } from '../a-elec/a-elec';
import { ALampesPage } from '../a-lampes/a-lampes';
import { AClimPage } from '../a-clim/a-clim';
import { AjoutClimatiseurPage } from '../ajout-climatiseur/ajout-climatiseur';

/**
 * Generated class for the AddProduitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-produit',
  templateUrl: 'add-produit.html',
})
export class AddProduitPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProduitPage');
  }
  goToPageOne(params){
    if (!params) params = {};
    this.navCtrl.push(ATvPage);
  }
  goToPageTwo(params){
    if(!params) params = {};
    this.navCtrl.push(AInfoPage);
  }
  goToPageThree(params){
    if(!params) params = {};
    this.navCtrl.push(AElecPage);
  }
  goToPageFour(params){
    if(!params) params = {};
    this.navCtrl.push(ALampesPage);
  }
  goToPageFive(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutClimatiseurPage);
  }

}
