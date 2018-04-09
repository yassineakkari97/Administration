import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'page-update-imprimante',
  templateUrl: 'update-imprimante.html',
})
export class UpdateImprimantePage {


  url : string ;
  item : any ;
  newitem : any   ;
 cout : any ;
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
       this.facture=this.item.Facture ;
      this.lien=this.item.Image;
      this.model=this.item.Model ;
      this.prix=this.item.Prix;
       this.fonction=this.item.Recto ;
       console.log(this.model);
       
       

  }

  Update() {
    this.afdb.object(this.url+ '/'+ this.item.del).update({
      Category : "cat2",
        Facture : this.facture,
        Image : this.lien,
        del : this.item.del,
        Recto : this.fonction ,
        Prix : this.prix,
        Model : this.model 
    });

    this.navCtrl.pop();
  }

}
