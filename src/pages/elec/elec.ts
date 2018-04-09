import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AspirateursPage } from '../aspirateurs/aspirateurs';
import { SCheLingePage } from '../s-che-linge/s-che-linge';
import { AutomatiquesPage } from '../automatiques/automatiques';
import { AHublotPage } from '../a-hublot/a-hublot';
import { OuvertureParLeDessusPage } from '../ouverture-par-le-dessus/ouverture-par-le-dessus';
import { Largeur45CmPoseLibrePage } from '../largeur45cm-pose-libre/largeur45cm-pose-libre';
import { CapsulesEtDosettesPage } from '../capsules-et-dosettes/capsules-et-dosettes';
///////////////////////////////////
import { Largeur60cmIntePage  } from '../../pages/largeur60cm-inte/largeur60cm-inte';
import { TabletopPage  } from '../../pages/tabletop/tabletop';

import { TtopPage } from '../../pages/ttop/ttop';
import { PsCongelateurPage } from '../../pages/ps-congelateur/ps-congelateur';
import { PaCongelateurPage } from '../../pages/pa-congelateur/pa-congelateur';
import { Pm300litresPage } from '../../pages/pm300litres/pm300litres';
import { Pp300litresPage } from '../../pages/pp300litres/pp300litres';

import {  ArmoirePlusDe230LPage } from '../../pages/armoire-plus-de230-l/armoire-plus-de230-l';
import { ArmoireMoisDe230LPage  } from '../../pages/armoire-mois-de230-l/armoire-mois-de230-l';
import {  CoffrePlus230LPage } from '../../pages/coffre-plus230-l/coffre-plus230-l';
import { CoffreMois230LPage  } from '../../pages/coffre-mois230-l/coffre-mois230-l';
import { Largeur45CmIntGrablesPage } from '../largeur45cm-int-grables/largeur45cm-int-grables';
import { Largeur60CmPoseLibrePage } from '../largeur60cm-pose-libre/largeur60cm-pose-libre';
import { PorteSansCongelateurPage } from '../1-porte-sans-congelateur/1-porte-sans-congelateur';
import { PorteAvecCongelateurPage } from '../1-porte-avec-congelateur/1-porte-avec-congelateur';
import { PortesMoisDe300LitresPage } from '../portes-mois-de300-litres/portes-mois-de300-litres';
import { PortesPlusDe300LitresPage } from '../portes-plus-de300-litres/portes-plus-de300-litres';



@Component({
  selector: 'page-elec',
  templateUrl: 'elec.html',
})
export class ElecPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElecPage');
  }
  goToAspirateurs(params){
    if(!params) params = {};
    this.navCtrl.push(AspirateursPage);
  }
  goToSCheLinge(params){
    if(!params) params = {};
    this.navCtrl.push(SCheLingePage);
  }
  goToAutomatiques(params){
    if(!params) params = {};
    this.navCtrl.push(AutomatiquesPage);
  }
  goToAHublot(params){
    if(!params) params = {};
    this.navCtrl.push(AHublotPage);
  }
  goToOuvertureParLeDessus(params){
    if(!params) params = {};
    this.navCtrl.push(OuvertureParLeDessusPage);
  }
  
  goToCapsulesEtDosettes(params){
    if(!params) params = {};
    this.navCtrl.push(CapsulesEtDosettesPage);
  }

 


 
  goToLargeur45CmPoseLibre(params){
    if(!params) params = {};
    this.navCtrl.push(Largeur45CmPoseLibrePage);
  }
  goToLargeur45CmI(params){
    if(!params) params = {};
    this.navCtrl.push(Largeur45CmIntGrablesPage);
  }
  goToLargeur60CmI(params){
    if(!params) params = {};
    this.navCtrl.push(Largeur60cmIntePage);
  }
  goToLargeur60CmL(params){
    if(!params) params = {};
    this.navCtrl.push(Largeur60CmPoseLibrePage);
  }


  TableTop(){    
    this.navCtrl.push(TabletopPage);
  }
  PorteSansCongelateur(){
    this.navCtrl.push(PorteSansCongelateurPage);
  }
  PorteAvecCongelateur(){
    this.navCtrl.push(PorteAvecCongelateurPage);
  }
  PortesMoisDe300L(){
    this.navCtrl.push(PortesMoisDe300LitresPage);
  }
  PortesPlusDe300L(){
    this.navCtrl.push(PortesPlusDe300LitresPage);
  }
 

}
