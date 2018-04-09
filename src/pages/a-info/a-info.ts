import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pouces1720Page } from '../pouces1720/pouces1720';
import { AjoutTvPcPage } from '../ajout-tv-pc/ajout-tv-pc';
import { AjoutImprimantePage } from '../ajout-imprimante/ajout-imprimante';

/**
 * Generated class for the AInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-info',
  templateUrl: 'a-info.html',
})
export class AInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AInfoPage');
  }
  goToP1720(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTvPcPage, {
      url : "Products/pouces1720/"
    });
  }
  goToP2122(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTvPcPage, {
      url : "Products/pouces2122/"
    });
  }
  goToP23(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTvPcPage, {
      url : "Products/pouces23/"
    });
  }
  goToP24(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTvPcPage, {
      url : "Products/pouces24/"
    });
  }
  goToP27(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTvPcPage, {
      url : "Products/pouces27/"
    });
  }
  goToImp(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/imprimantes/"
    });
  }
  goToMulti(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/multifonctions/"
    });
  }

 
  goTonb120(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/NB120/"
    });
  }
  goTonb2140(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/NB2140/"
    });
  }
  goTonb4180(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/NB4180/"
    });
  }
  goToc120(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/C120/"
    });
  }
  goToc2140(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/C2140/"
    });
  }
  goToc4180(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutImprimantePage, {
      url : "Products/C4180/"
    });
  }
  

}
