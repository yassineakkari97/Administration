import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ReponserPage } from '../../pages/reponser/reponser';

@Component({
  selector: 'page-rapport',
  templateUrl: 'rapport.html',
})
export class RapportPage {
  msgrapport : any ;
  public rapportRef :firebase.database.Reference;
  items : Observable<any>;
  item : any ;

constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private afdb : AngularFireDatabase) {
  this.items = afdb.list('/rapports').valueChanges();

  this.rapportRef = firebase.database().ref('/rapports' );

  this.rapportRef.on('value', rapportList => {

    let rapports = [];
    rapportList.forEach( rapport => {
    
      if(rapport.val().user==firebase.auth().currentUser.uid )
      {  rapports.push(rapport.val());}


      return false;
    });



  });



 

}

presentToast() {
  let toast = this.toastCtrl.create({
    message: 'le rapport est supprimé ',
    duration: 3000
  });
  toast.present();
}

doRefresh(refresher) {
  console.log('Begin async operation', refresher);

  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 20000);
}



Send(item:any){
  this.navCtrl.push(ReponserPage,{
    item:item
  })
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

delete(item:any){
  this.afdb.object('/rapports/'+item.key).remove();
  this.presentToast() ;

}


}
