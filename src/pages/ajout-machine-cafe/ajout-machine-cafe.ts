import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'page-ajout-machine-cafe',
  templateUrl: 'ajout-machine-cafe.html'
})
export class AjoutMachineCafePage {

  productRef: firebase.database.Reference;
  url: any;
  lien : string ; 
  model : string ;
  prix : number ;
  facture : number ;
  cons : number ;
  pression : number;
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
      Pression : this.pression , 
      Conso : this.cons ,
      del:ref.key
        });
    this.navCtrl.pop();
  }

  
}
