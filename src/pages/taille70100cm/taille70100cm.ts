import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';


import { ToastController } from 'ionic-angular';
import { UpdateTvPage } from '../../pages/update-tv/update-tv';



@Component({
  selector: 'page-taille70100cm',
  templateUrl: 'taille70100cm.html'
})
export class Taille70100CmPage {
  connect : boolean ;
  verif : boolean = true ;
  check: boolean = false;
  test: boolean;
  compteurRef: firebase.database.Reference;
  item1: AngularFireList<{}>;
  rem: firebase.database.Reference;
  items: Observable<any[]>;
  favs : AngularFireList<any>;
  produits : Array<any>=[];
  var : boolean =false ;
  constructor(private afDb: AngularFireDatabase,
    public toastCtrl: ToastController ,
    private afAuth: AngularFireAuth,
    public sanitizer : DomSanitizer  ,
    public navCtrl: NavController,
    public navParams: NavParams,
    public afdb: AngularFireDatabase) {
    this.items = afdb.list('Products/taille70100/').valueChanges();
   

  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  Update(item : any){

    this.navCtrl.push(UpdateTvPage , {
      item : item ,
      url : '/Products/taille70100/'
    });
      }
    
      Delete(item:any){
      console.log(item.del);
      console.log('/Products/taille70100/'+item.del);
    
      this.afdb.object('/Products/taille70100/'+item.del).remove();
    
     
    
      }
}