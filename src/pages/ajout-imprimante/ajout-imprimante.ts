import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Component({
  selector: 'page-ajout-imprimante',
  templateUrl: 'ajout-imprimante.html'
})
export class AjoutImprimantePage {
  productRef: firebase.database.Reference;
  facture:number;
  rv:string;
  prix: number;
  url: string;
  model : string;
  lien : string;
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
      del:ref.key
        });
    this.navCtrl.pop();
  }
  
}
