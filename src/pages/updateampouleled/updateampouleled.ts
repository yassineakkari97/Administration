import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'page-updateampouleled',
  templateUrl: 'updateampouleled.html',
})
export class UpdateampouleledPage {
  class : any ;
  conso : any ;
  facture : any ;
  url : string ;
  model : any;
  prix : any ;
 
   dim : any ;
    cap : any ;
   item : any ;
   newitem : any   ;
  cout : any ;
  def : any ;
  lien : any ;
  fonction : any ;
 
   constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
  
    this.url = this.navParams.get("url") ;
    console.log(this.url);
    
    this.item = this.navParams.get("item") ;
    console.log(this.item);
    
 
     this.dim=this.item.Puissance ;
     this.cout=this.item.Cout ;
     this.conso=this.item.Conso ;
      this.facture=this.item.Duree ;
     this.lien=this.item.Image;
     this.model=this.item.Model ;
     this.prix=this.item.Prix;
      this.class=this.item.CE ;
      this.cap=this.item.Capacite;
      console.log(this.model);
      
      

 }

 Update() {
   this.afdb.object(this.url+ '/'+ this.item.del).update({
    CE : this.class,
      Capacite : this.cap,
      Category : "cat4",
      Cout : this.cout,
      Puissance : this.dim,
      Duree : this.facture,
      Image : this.lien,
      Model : this.model,
      Prix : this.prix,
      del : this.item.del
      
        
       
   });

   this.navCtrl.pop();
 }
}
