import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-ajout-tv',
  templateUrl: 'ajout-tv.html'
})
export class AjoutTVPage {

  public productRef :firebase.database.Reference;

  url : string ;
  item : any ;
  newitem : any   ;
 class : any ;
 def : any ;
 facture : any ;
 model : any ;
 lien : any ;
 prix : any ;
 taille : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
   
     this.url = this.navParams.get("url") ;
    /** this.item = this.navParams.get("item") ;
  
      console.log(this.url);
      console.log(this.item);
      
      this.class=this.item.CE ;
      this.def=this.item.Def;
      this.facture=this.item.Facture; console.log(this.facture); console.log(this.item.Facture);
      
      
      this.model=this.item.Model;
      this.lien=this.item.Image;
      this.prix=this.item.Prix;
      this.taille=this.item.Taille;**/

      this.productRef = firebase.database().ref(this.url);



  }


  Add() {

    let ref = this.productRef.push({});
    ref.set({
      CE : this.class,
      Category : "cat1",
      Def : this.def,
      Facture : this.facture,
      Image : this.lien,
      Key : ref.key,
      Model : this.model,
      Prix : this.prix,
      Taille : this.taille,
      del:ref.key
        });
    console.log( "new item: " + this.class);
    this.navCtrl.pop();
  }

}
