import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';


@Component({
  selector: 'page-update-t-vpc',
  templateUrl: 'update-t-vpc.html',
})
export class UpdateTVpcPage {


  url : string ;
  item : any ;
  newitem : any   ;
 cout : any ;
 def : any ;
 facture : any ;
 model : any ;
 poff : any ;
 pon : any ;
 taille : any ;
 lien : any ;
 prix : any ;
 veille : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afdb: AngularFireDatabase) {
   
     this.url = this.navParams.get("url") ;
     this.item = this.navParams.get("item") ;
  
      console.log(this.url);
      console.log(this.item);

      console.log(this.item.Def);
      console.log(this.item.POn);
      console.log(this.item.POff);

      
      this.def=this.item.Def;
      this.lien=this.item.Image;
      this.model=this.item.Model;
      this.poff=this.item.POff;
      this.pon=this.item.POn;
      this.prix=this.item.Prix;
     this.cout= this.item.Cout ;
       this.veille=this.item.PVeille ;
       console.log(this.def , this.lien , this.model , this.poff , this.pon ,this.cout ,this.prix , this.veille);
       

  }

  Update() {
    this.afdb.object(this.url+ '/'+ this.item.del).update({
      Category : "cat2",
        Cout : this.cout,
        Def : this.def,
        Image : this.lien,
        del : this.item.del,
        Model : this.model,
        POff : this.poff,
        POn : this.pon,
        PVeille : this.veille,
        Prix : this.prix
      
    });

    this.navCtrl.pop();
  }

}
