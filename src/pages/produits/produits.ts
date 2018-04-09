import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProduitPage } from '../add-produit/add-produit';
import { RecommandationPage } from '../../pages/recommandation/recommandation';



@IonicPage()
@Component({
  selector: 'page-produits',
  templateUrl: 'produits.html',
})
export class ProduitsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitsPage');
  }
  add(){
    this.navCtrl.push(AddProduitPage);
  }

  ToRecomm(){
    this.navCtrl.push(RecommandationPage);

  }

}
