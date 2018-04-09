import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-update-tv',
  templateUrl: 'update-tv.html',
})
export class UpdateTvPage {

 
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
     this.item = this.navParams.get("item") ;
  
      console.log(this.url);
      console.log(this.item);
      
      this.class=this.item.CE ;
      this.def=this.item.Def;
      this.facture=this.item.Facture; console.log(this.facture); console.log(this.item.Facture);
      
      
      this.model=this.item.Model;
      this.lien=this.item.Image;
      this.prix=this.item.Prix;
      this.taille=this.item.Taille;


  }


  Update() {
    this.afdb.object(this.url+ '/'+ this.item.del).update({
      CE : this.class,
      Category : "cat1",
      Def : this.def,
      Facture : this.facture,
      Image : this.lien,
      Key : "tv4",
      Model : this.model,
      Prix : this.prix,
      Taille : this.taille,
      del:this.item.del 
    });

    console.log( "new item: " + this.class);
    this.navCtrl.pop();
  }

}
