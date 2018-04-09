
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {DomSanitizer} from '@angular/platform-browser';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { UpdateTVpcPage } from '../../pages/update-t-vpc/update-t-vpc';
import { UpdateAspPage } from '../../pages/update-asp/update-asp';

import { ToastController } from 'ionic-angular';
import { UpdateTvPage } from '../../pages/update-tv/update-tv';
import { UpdateAspirateurPage } from '../../pages/update-aspirateur/update-aspirateur';
@Component({
  selector: 'page-aspirateurs',
  templateUrl: 'aspirateurs.html'
})
export class AspirateursPage {


  items : Observable<any>
  constructor(public toastCtrl: ToastController ,public sanitizer : DomSanitizer   , public navCtrl: NavController, private afdb : AngularFireDatabase ) {
    this.items = afdb.list('Products/aspirateurs/').valueChanges();
    
    
  }
  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
 



  Update(item : any){

    this.navCtrl.push(UpdateAspPage , {
      item : item ,
      url : '/Products/aspirateurs/'
    });
      }
    
      Delete(item:any){
      console.log(item.del);
      console.log('/Products/aspirateurs/'+item.del);
    
      this.afdb.object('/Products/aspirateurs/'+item.del).remove();
    
     
    
      }
  
      
}
