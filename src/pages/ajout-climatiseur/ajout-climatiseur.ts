import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-ajout-climatiseur',
  templateUrl: 'ajout-climatiseur.html'
})
export class AjoutClimatiseurPage {
  autres: any;
  garantie: any;
  ce: any;
  dim: any;
  prix: any;
  model: any;
  lien: any;
  productRef: firebase.database.Reference;
  url: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
   
    this.productRef = firebase.database().ref('Products/climatiseurs');
  }
  Add() {

    let ref = this.productRef.push({});
    ref.set({
      Category : "cat5",
      Image : this.lien,
      Key : ref.key,
      Model : this.model,
      Prix : this.prix,
      Autres : this.autres,
      Garantie : this.garantie ,
      Dim : this.dim, 
      CE : this.ce ,
      del:ref.key
        });
    this.navCtrl.pop();
  }
  
}
