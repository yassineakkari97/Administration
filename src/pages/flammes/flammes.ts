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
import { UpdatelavelingePage } from '../../pages/updatelavelinge/updatelavelinge';



@Component({
  selector: 'page-flammes',
  templateUrl: 'flammes.html',
})
export class FlammesPage {

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
    this.items = afdb.list('Products/flammes/').valueChanges();
   
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FlammesPage');
  }
  
  
 
  Update(item : any){

    this.navCtrl.push(UpdatelavelingePage , {
      item : item ,
      url : '/Products/flammes/'
    });
      }
    
      Delete(item:any){
      console.log(item.del);
      console.log('/Products/flammes/'+item.del);
    
      this.afdb.object('/Products/flammes/'+item.del).remove();
    
     
    
      }
  

  
}
