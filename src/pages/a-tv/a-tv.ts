import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tv1Page } from '../tv1/tv1';
import { AjoutTVPage } from '../ajout-tv/ajout-tv';

/**
 * Generated class for the ATvPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-tv',
  templateUrl: 'a-tv.html',
})
export class ATvPage {
url : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ATvPage');
  }
  goToTv1(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTVPage, {
      url : "Products/tailleinf70/"
    });
  }
  goToTv2(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTVPage, {
      url : "/Products/taille70100/"
    });
  }
  goToTv3(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTVPage, {
      url : "Products/taillesup100/"
    });
  }
  goToTv4(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutTVPage, {
      url : "Products/4k/"
    });
  }

}
