import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
@Component({
  selector: 'page-updatecafe',
  templateUrl: 'updatecafe.html',
})
export class UpdatecafePage {

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
   
     
 
       this.conso=this.item.Conso ;
        this.facture=this.item.Facture ;
       this.lien=this.item.Image;
       this.model=this.item.Model ;
       this.prix=this.item.Prix;
        this.class=this.item.CE ;
        this.press=this.item.Pression ;
        console.log(this.model);
        
        
 
   }
 
   Update() {
     this.afdb.object(this.url+ '/'+ this.item.del).update({
      Category : "cat3",
      Conso : this.conso,
      Facture : this.facture,
      Image : this.lien,
      Model : this.model,
      Pression : this.press,
      Prix : this.prix,
      del : this.item.del
     });
 
     this.navCtrl.pop();
   }
}
