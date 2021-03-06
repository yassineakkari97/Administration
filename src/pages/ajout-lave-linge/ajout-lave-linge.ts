import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-ajout-lave-linge',
  templateUrl: 'ajout-lave-linge.html'
})
export class AjoutLaveLingePage {

  productRef: firebase.database.Reference;
  url: any;
  cout : number;
  facture : number;
  capacite : number;
  ce   :string ;
  conso : number;
  dim :  string ;
  model : string ;
  lien : string ;
  prix : number ; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
   
    this.url = this.navParams.get("url") ;
    this.productRef = firebase.database().ref(this.url);
  }
  Add() {

    let ref = this.productRef.push({});
    ref.set({
      Category : "cat2",
      Facture : this.facture,
      Image : this.lien,
      Key : ref.key,
      Model : this.model,
      Prix : this.prix,
      Conso : this.conso , 
      Capacite : this.capacite ,
      Dim : this.dim,
      CE : this.ce ,
      del:ref.key
        });
    this.navCtrl.pop();
  }
  
}
