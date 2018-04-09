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
import { UpdateLaveVaiPage } from '../../pages/update-lave-vai/update-lave-vai';

@Component({
  selector: 'page-largeur45cm-int-grables',
  templateUrl: 'largeur45cm-int-grables.html'
})
export class Largeur45CmIntGrablesPage {

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
    this.items = afdb.list('Products/Largeur45I/').valueChanges();
  
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
 
  Update(item : any){

    this.navCtrl.push(UpdateLaveVaiPage , {
      item : item ,
      url : '/Products/Largeur45I/'
    });
      }
    
      Delete(item:any){
      console.log(item.del);
      console.log('/Products/Largeur45I/'+item.del);
    
      this.afdb.object('/Products/Largeur45I/'+item.del).remove();
    
     
    
      }
  
  
}
