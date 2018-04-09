
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { UpdateTVpcPage } from '../../pages/update-t-vpc/update-t-vpc';

import { ToastController } from 'ionic-angular';
import { UpdateTvPage } from '../../pages/update-tv/update-tv';
import { UpdateImprimantePage } from '../../pages/update-imprimante/update-imprimante';

@Component({
  selector: 'page-color1-21',
  templateUrl: 'color1-21.html',
})
export class Color1_21Page {

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
    public afdb: AngularFireDatabase)

  {
    this.items = afdb.list('Products/C120/').valueChanges();
    
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  


  Update(item : any){

    this.navCtrl.push(UpdateImprimantePage , {
      item : item ,
      url : '/Products/C120/'
    });
      }
    
      Delete(item:any){
      console.log(item.del);
      console.log('/Products/C120/'+item.del);
    
      this.afdb.object('/Products/C120/'+item.del).remove();
    
     
    
      }
  
}
