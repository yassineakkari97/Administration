
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { UpdateTVpcPage } from '../../pages/update-t-vpc/update-t-vpc';

import { ToastController } from 'ionic-angular';
import { UpdateRefrigPage } from '../../pages/update-refrig/update-refrig';



@Component({
  selector: 'page-1-porte-sans-congelateur',
  templateUrl: '1-porte-sans-congelateur.html',
})
export class PorteSansCongelateurPage {

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
    this.items = afdb.list('Products/1psc/').valueChanges();
   
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  Update(item : any){

    this.navCtrl.push(UpdateRefrigPage , {
      item : item ,
      url : '/Products/1psc/'
    });
      }
    
      Delete(item:any){
      console.log(item.del);
      console.log('/Products/1psc/'+item.del);
    
      this.afdb.object('/Products/1psc/'+item.del).remove();
    
     
    
      }
 
}
