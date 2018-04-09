import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-ajout-aspirateur',
  templateUrl: 'ajout-aspirateur.html'
})
export class AjoutAspirateurPage {

  productRef: firebase.database.Reference;
  model:string;
  facture : number;
  cons : number;
  prix : number;
  lien : string;
  ce : string;
  url : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
   
    this.url = this.navParams.get("url") ;      
    this.productRef = firebase.database().ref(this.url);

  }
  Add() {

    let ref = this.productRef.push({});
    ref.set({
      Category : "cat2",
        Facture : this.facture,
        Conso : this.cons,
        CE : this.ce,
        Image : this.lien,
        Model : this.model,
        Prix : this.prix,
        del:ref.key
        });
    this.navCtrl.pop();
  }
  
}
