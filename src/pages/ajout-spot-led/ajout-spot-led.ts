import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'page-ajout-spot-led',
  templateUrl: 'ajout-spot-led.html'
})
export class AjoutSpotLedPage {

  duree: number;
  ce: any;
  cout: number;
  prix: number;
  model: any;
  lien: any;
  puissance : number;
  productRef: firebase.database.Reference;
  url: any;
  
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
      Cout : this.cout ,
      Duree : this.duree, 
      CE : this.ce ,
      del:ref.key
        });
    this.navCtrl.pop();
  }
}
