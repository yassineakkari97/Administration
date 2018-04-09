import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AjoutAspirateurPage } from '../ajout-aspirateur/ajout-aspirateur';
import { AjoutMachineCafePage } from '../ajout-machine-cafe/ajout-machine-cafe';
import { AjoutLaveLingePage } from '../ajout-lave-linge/ajout-lave-linge';
import { AjoutLaveVaissellePage } from '../ajout-lave-vaisselle/ajout-lave-vaisselle';
import { AjoutRefrigerateurPage } from '../ajout-refrigerateur/ajout-refrigerateur';

/**
 * Generated class for the AElecPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-a-elec',
  templateUrl: 'a-elec.html',
})
export class AElecPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AElecPage');
  }

  goToAspirateurs(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutAspirateurPage, {
      url : "Products/aspirateurs/"
    });
  }
  
  goToAutomatiques(params){
    
    if(!params) params = {};
    this.navCtrl.push(AjoutMachineCafePage, {
      url : "Products/automatiques/"
    });
  }
  goToAHublot(params){
  
    if(!params) params = {};
    this.navCtrl.push(AjoutLaveLingePage, {
      url : "Products/Ahublot/"
    });
  }
  goToOuvertureParLeDessus(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutLaveLingePage, {
      url : "Products/opd/"
    });
  }
  
  goToCapsulesEtDosettes(params){
    
    if(!params) params = {};
    this.navCtrl.push(AjoutMachineCafePage, {
      url : "Products/capsules/"
    });
  }

 


 
  goToLargeur45CmPoseLibre(params){

    if(!params) params = {};
    this.navCtrl.push(AjoutLaveVaissellePage, {
      url : "Products/Largeur45Libre/"
    });
  }
  goToLargeur45CmI(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutLaveVaissellePage, {
      url : "Products/Largeur45I/"
    });
  }
  goToLargeur60CmI(params){

    if(!params) params = {};
    this.navCtrl.push(AjoutLaveVaissellePage, {
      url : "Products/Largeur60I/"
    });
  }
  goToLargeur60CmL(params){

    if(!params) params = {};
    this.navCtrl.push(AjoutLaveVaissellePage, {
      url : "Products/Largeur60Libre/"
    });
  }


  TableTop(params){    
    if(!params) params = {};
    this.navCtrl.push(AjoutRefrigerateurPage, {
      url : "Products/TableTop/"
    });
  }
  PorteSansCongelateur(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutRefrigerateurPage, {
      url : "Products/1psc/"
    });
  }
  PorteAvecCongelateur(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutRefrigerateurPage, {
      url : "Products/1pac/"
    });
  }
  PortesMoisDe300L(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutRefrigerateurPage, {
      url : "Products/2pm300/"
    });
  }
  PortesPlusDe300L(params){
    if(!params) params = {};
    this.navCtrl.push(AjoutRefrigerateurPage, {
      url : "Products/2pp300/"
    });
  }
 

}
