import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-update-lave-vai',
  templateUrl: 'update-lave-vai.html',
  
})
export class UpdateLaveVaiPage {
  cout : any ;
  class  : any ;
  url : string ;
  item : any ;
  newitem : any   ;
 conso : any ;
 def : any ;
 facture : any ;
 model : any;
 lien : any ;
 prix : any ;
 fonction : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
 
    this.url = this.navParams.get("url") ;
    this.item = this.navParams.get("item") ;
 
   
    this.cout=this.item.Cout ;
           this.class = this.item.CE;
      this.facture=this.item.Facture ;
     this.lien=this.item.Image;
     this.model=this.item.Model ;
     this.prix=this.item.Prix;
      this.fonction=this.item.Recto ;
      this.def=this.item.Def;
      console.log(this.model);
      
      

 }

 Update() {
   this.afdb.object(this.url+ '/'+ this.item.del).update({
CE: this.class ,
Category: "cat3",
Cout: this.cout,
Def: this.def,
Image: this.lien,
Model: this.model,
Prix: this.prix,
del: this.item.del

   });

   this.navCtrl.pop();
 }

}
