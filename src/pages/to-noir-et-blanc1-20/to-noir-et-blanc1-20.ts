import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-to-noir-et-blanc1-20',
  templateUrl: 'to-noir-et-blanc1-20.html',
})
export class ToNoirEtBlanc1_20Page {

  rem: firebase.database.Reference;
  items : Observable<any>;
  favs : AngularFireList<any>;

  constructor(public toastCtrl: ToastController ,public sanitizer : DomSanitizer   , public navCtrl: NavController,afdb : AngularFireDatabase ,public navParams: NavParams) {
    this.items = afdb.list('Products/NB120/').valueChanges();
    if(firebase.auth().currentUser!=null){
      
      this.rem = firebase.database().ref('Favourites/'+firebase.auth().currentUser.uid );
     }
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  AddToFavourites(item){
    console.log(firebase.auth().currentUser);

    if (firebase.auth().currentUser!=null){
      
      let ref = this.rem.push({});
      ref.set({
        Model : item.Model,
        Image : item.Image,
        Price : item.Prix,
        key : ref.key,
      });
      
        let toast = this.toastCtrl.create({
          message: 'Le produit a été ajouté ',
          duration: 1200
        });
        toast.present();
    }
    
      else{
        console.log('Please Log in first !');

      }
    
  }

}
