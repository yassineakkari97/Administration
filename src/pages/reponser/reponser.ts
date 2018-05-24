import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-reponser',
  templateUrl: 'reponser.html',
})
export class ReponserPage {
  item : any ;
  rapport : any ;
  date : any ;
  msgrapport : any ;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private afdb : AngularFireDatabase) {

this.item=this.navParams.get("item") ;
console.log(this.item);
this.rapport=this.item.rapport;
this.date=this.item.date ;
}


Send(item:any){
  this.afdb.object('/rapports/'+item.key).update({

    rapport : item.rapport ,
    user : item.user ,
    verif:true ,
    reponse :this.msgrapport,
    key :item.key,
    date:item.date
    

  });
  this.navCtrl.pop();


  /*console.log(item);
  
  let ref =this.rapportRef.push({});
  ref.set({
    rapport : item.rapport ,
    user : item.user ,
    verif:true ,
    reponse :this.msgrapport,
    key :ref.key,
  });*/

}

  

}
