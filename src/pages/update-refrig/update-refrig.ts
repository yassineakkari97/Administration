import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'page-update-refrig',
  templateUrl: 'update-refrig.html',
})
export class UpdateRefrigPage {

  class : any ;
  conso : any ;
  facture : any ;
  url : string ;
  model : any;
  prix : any ;
 
 
   item : any ;
   newitem : any   ;
  cout : any ;
  def : any ;
  lien : any ;
  fonction : any ;
  press : any ;
 
   constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
  
    this.url = this.navParams.get("url") ;
    this.item = this.navParams.get("item") ;
 
      this.def = this.item.Def ;
      this.cout=this.item.Cout ;
     this.lien=this.item.Image;
     this.model=this.item.Model ;
     this.prix=this.item.Prix;
      this.class=this.item.CE ;
            console.log(this.item);
      
      

 }
 

 Update() {
   this.afdb.object(this.url+ '/'+ this.item.del).update({
    CE : this.class,
    Category : "cat3",
    Cout : this.cout,
    Def  : this.def ,
    Image : this.lien,
    Model : this.model,
    Prix : this.prix,
    "del" : this.item.del 
   });

   this.navCtrl.pop();
 }
}

