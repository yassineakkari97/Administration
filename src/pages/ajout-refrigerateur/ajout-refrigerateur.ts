import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
@Component({
  selector: 'page-ajout-refrigerateur',
  templateUrl: 'ajout-refrigerateur.html'
})
export class AjoutRefrigerateurPage {
  productRef: firebase.database.Reference;
  ce: string ;
  cout: number ;
  def: string;
  url : string;
  lien : string;
  model: string; 
  prix: number; 

 
constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
   
  this.url = this.navParams.get("url") ;
  this.productRef = firebase.database().ref(this.url);
}
Add() {

  let ref = this.productRef.push({});
  ref.set({
    Category : "cat2",
    Image : this.lien,
    Key : ref.key,
    Model : this.model,
    Prix : this.prix,
    Cout : this.cout,
    Def : this.def,
    CE : this.ce ,
    del:ref.key
      });
  this.navCtrl.pop();
}
  
}
