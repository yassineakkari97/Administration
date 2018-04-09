import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-updatelavelinge',
  templateUrl: 'updatelavelinge.html',
})
export class UpdatelavelingePage {

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

   
      
       this.dim=this.item.Capacite ;
       this.cout=this.item.Cout ;
       this.conso=this.item.Conso ;
        this.facture=this.item.Facture ;
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
        Category : "cat3",
        Cout : this.cout,
        Capacite : this.dim,
        Facture : this.facture,
        Image : this.lien,
        Conso :this.conso,
        Model : this.model,
        Prix : this.prix,
        del : this.item.del

        
      
     });
 
     this.navCtrl.pop();
   }
}
