import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompatiblesPage } from '../compatibles/compatibles';
import { FlammesPage } from '../flammes/flammes';
import { CedPage } from '../ced/ced';
import { CemPage } from '../cem/cem';
import { Gu10CompatiblesPage } from '../gu10-compatibles/gu10-compatibles';
import { Gu53Page } from '../gu53/gu53';
import { AutresSpotsGu53Page } from '../autres-spots-gu53/autres-spots-gu53';
import { AutreSpotsPage } from '../autre-spots/autre-spots';

/**
 * Generated class for the LampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lamp',
  templateUrl: 'lamp.html',
})
export class LampPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LampPage');
  }
  goToComp(){
    this.navCtrl.push(CompatiblesPage);
  }
  goToFlam(){
    this.navCtrl.push(FlammesPage);
  }
  goToCed(){
    this.navCtrl.push(CedPage);
  }
  goToCem(){
    this.navCtrl.push(CemPage);
  }
  goTogu10(params){
    if(!params) params = {};

    this.navCtrl.push(Gu10CompatiblesPage);
  }
  goToAgu10(params){
    if(!params) params = {};

    this.navCtrl.push(AutreSpotsPage);
  }
  goTogu53(params){
    if(!params) params = {};

    this.navCtrl.push(Gu53Page);
  }
  goToA53(params){
    if(!params) params = {};

    this.navCtrl.push(AutresSpotsGu53Page);
  }

}
