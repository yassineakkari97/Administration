import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';





@Component({
  selector: 'page-update-climatiseur',
  templateUrl: 'update-climatiseur.html',
})
export class UpdateClimatiseurPage {
  class : any ;
  conso : any ;
  facture : any ;
  url : string ;
  model : any;
  prix : any ;
 
   garantie : any ;
   item : any ;
   newitem : any   ;
  autres : any ;
  dim : any ;
  lien : any ;
  fonction : any ;
  press : any ;
 
   constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
  
    this.url = this.navParams.get("url") ;
    this.item = this.navParams.get("item") ;
    
      this.garantie = this.item.Garantie ;
      this.dim = this.item.Dim ;
      this.autres=this.item.Autres ;
     this.lien=this.item.Image;
     this.model=this.item.Model ;
     this.prix=this.item.Prix;
      this.class=this.item.CE ;
            console.log(this.item);
      
      

 }
 

 Update() {
   this.afdb.object(this.url+ '/'+ this.item.del).update({
      Autres : this.autres,
        CE : this.class,
        Category : "cat1",
        Dim : this.dim,
        Garantie : this.garantie,
        Image :this.lien,
        Model : this.model,
        Prix : this.prix,
        del : this.item.del
   });

   this.navCtrl.pop();
 }
}

