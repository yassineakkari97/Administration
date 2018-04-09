import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gu10CompatiblesPage } from '../gu10-compatibles/gu10-compatibles';
import { AjoutAmplouleLedPage } from '../ajout-amploule-led/ajout-amploule-led';
import { AjoutSpotLedPage } from '../ajout-spot-led/ajout-spot-led';

/**
 * Generated class for the ALampesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-lampes',
  templateUrl: 'a-lampes.html',
})
export class ALampesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ALampesPage');
  }
  goToComp(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutAmplouleLedPage, {
      url : "Products/compatibles/"
    });  
  }
  goToFlam(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutAmplouleLedPage, {
      url : "Products/flammes/"
    });
    }
  goToCed(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutAmplouleLedPage, {
      url : "Products/ced/"
    }); 
    }
  goToCem(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutAmplouleLedPage, {
      url : "Products/cem/"
    }); 
    }
  goTogu10(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutSpotLedPage, {
      url : "Products/Gu10cv/"
    }); 
  }
  goToAgu10(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutSpotLedPage, {
      url : "Products/Au10cv/"
    }); 
  }
  goTogu53(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutSpotLedPage, {
      url : "Products/Gu53cv/"
    }); 
  }
  goToA53(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutSpotLedPage, {
      url : "Products/AsGu53cv/"
    }); 
  }

}
