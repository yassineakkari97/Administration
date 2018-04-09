import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'firebase';
import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';

@Component({
  selector: 'page-p-user',
  templateUrl: 'p-user.html',
})
export class PUserPage {

  public produit:Array<any>;

  
  public produitList:Array<any>;
  public loadedproduitList:Array<any>;
  public produitRef:firebase.database.Reference;
  public profilRef :firebase.database.Reference;
  code : any;
  itemnumber : number ;
  number : number = 0 ; 


  constructor(private afDb: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {

    this.produitRef = firebase.database().ref('/produits');


this.produitRef.on('value', produitList => {
  let produits = [];
  produitList.forEach( produit => {
    produits.push(produit.val());
    return false;
  });

  this.produitList = produits;
  this.loadedproduitList = produits;
});


  }

  
getItems(searchbar) {
  // Reset items back to all of the items

  // set q to the value of the searchbar
  var q = searchbar.srcElement.value;


  // if the value is an empty string don't filter the items
  if (!q) {
    return;
  }

  this.produitList = this.produitList.filter((v) => {
    if(v.name && q) {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });     

  console.log(q, this.produitList.length);

}

Delete(item:any){
  console.log(item.key);

  this.afDb.object('/produits/'+item.key).remove();

 

  }

}
