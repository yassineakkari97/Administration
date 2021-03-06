import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-update-asp',
  templateUrl: 'update-asp.html',
})
export class UpdateAspPage {

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
 
   constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
    
      this.url = this.navParams.get("url") ;
      this.item = this.navParams.get("item") ;
   
     
 
       this.conso=this.item.Conso ;
        this.facture=this.item.Facture ;
       this.lien=this.item.Image;
       this.model=this.item.Model ;
       this.prix=this.item.Prix;
        this.class=this.item.CE ;
        console.log(this.model);
        
        
 
   }
 
   Update() {
     this.afdb.object(this.url+ '/'+ this.item.del).update({
       CE : this.class,
       Category : "cat3",
       Conso : this.conso,
       Facture : this.facture,
       Image :this.lien,
       Model : this.model,
       Prix : this.prix,
       del : this.item.del
     });
 
     this.navCtrl.pop();
   }
}
