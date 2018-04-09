import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
@Component({
  selector: 'page-ajout-tv-pc',
  templateUrl: 'ajout-tv-pc.html'
})
export class AjoutTvPcPage {

  cout: any;
  public productRef :firebase.database.Reference;
  url : string ;
  poff : any;
  pv : any;
  pui : any;
  res : any;
  prix : any;
  model : any;
  lien : any;
  def : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
   
    this.url = this.navParams.get("url") ;      
    this.productRef = firebase.database().ref(this.url);

  }


  Add() {

    let ref = this.productRef.push({});
    ref.set({
      Category : "cat2",
        Cout : this.cout,
        Def : this.res,
        Image : this.lien,
        Model : this.model,
        POff : this.poff,
        POn : this.pui,
        PVeille : this.pv,
        Prix : this.prix,
        del:ref.key
        });
    this.navCtrl.pop();
  }

}
