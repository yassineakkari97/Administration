import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitsPage } from '../produits/produits';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
import {DomSanitizer} from '@angular/platform-browser';

import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { PUserPage } from '../../pages/p-user/p-user';
import { RapportPage } from '../../pages/rapport/rapport';

@Component({
  selector: 'page-reciption',
  templateUrl: 'reciption.html',
})
export class ReciptionPage {
  public lineChartLabels:Array<any>= [];
  public lineChartData:Array<any>= [];
  public Labels:any[] = [] ;
  public Data:number []= [] ;
  public test : boolean = false  ;
  Image1 : string ; 
  Image2 : string ; 
  Image3 : string ; 
  Image4 : string ; 

  cat1 : number = 0 ;
  cat2 : number = 0  ;
  cat3 : number = 0  ;
  cat4 : number = 0 ;
  cat5 : number = 0  ;

  msg1 : string ;
  msg2:string ;
  
  total : number = 0;
  nbuser : number = 0 ;
 ///////////////////////////////////
public tele : number = 0 ;
public ampoules : number = 0 ;
public informatique : number = 0 ;
public autres : number = 0 ;
public electromenager : number = 0 ;
public doughnutChartLabels:string[] ;
public doughnutChartData:number[] ;
public doughnutChartType:string ;
public barChartLabels:string[] ;
public barChartType:string ;
public barChartLegend:boolean = true;
public barChartData:any[];

public userRef :firebase.database.Reference;
public adminRef :firebase.database.Reference;
public produitRef :firebase.database.Reference;

nbadmin : any=0 ;
nbproduit : any=0 ;


  constructor(private afDb: AngularFireDatabase,public sanitizer : DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
   this.Image1="https://firebasestorage.googleapis.com/v0/b/yassine09841797.appspot.com/o/t%C3%A9l%C3%A9chargement.png?alt=media&token=89f38e00-7932-4513-a5f0-6398dbffbc14";
   this.Image2="https://firebasestorage.googleapis.com/v0/b/yassine09841797.appspot.com/o/t%C3%A9l%C3%A9chargement%20(1).png?alt=media&token=8b99864e-041e-4c0a-97e0-8c9a87ef5fbc";
    this.Image3="https://firebasestorage.googleapis.com/v0/b/yassine09841797.appspot.com/o/t%C3%A9l%C3%A9chargement%20(2).png?alt=media&token=66203e1d-2c0b-4dd1-960e-ecf213c96493";
    this.Image4="https://firebasestorage.googleapis.com/v0/b/yassine09841797.appspot.com/o/images.jpg?alt=media&token=4353a82b-ceab-4a6c-9ed7-b5e5ac9da986";
    this.Labels = this.navParams.get('label') ;
    console.log("label" +this.Labels);
    this.userRef = firebase.database().ref('/users/');
    this.adminRef = firebase.database().ref('/admins/');
    this.produitRef = firebase.database().ref('/produits/');

    this.adminRef.on('value', produitList => {
      let ref : any = [] ;
      produitList.forEach( product => {
         
      this.nbadmin=this.nbadmin+1;
       
       
return false ;
    });

    
    
    

  });

  this.produitRef.on('value', produitList => {
    let ref : any = [] ;
    produitList.forEach( product => {
       
    this.nbproduit=this.nbproduit+1;
     
     
return false ;
  });

  
  
  

});

  
      this.Data = this.navParams.get('data') ;
      console.log("data" +this.Data);

    this.nbuser = this.navParams.get('total') ;
    this.cat1 = this.navParams.get('cat1') ;
    this.cat2 = this.navParams.get('cat2') ;
    this.cat3 = this.navParams.get('cat3') ;
    this.cat4 = this.navParams.get('cat4') ;
    this.cat5 = this.navParams.get('cat5') ;

    this.total= this.cat1+this.cat2+this.cat3+this.cat4+this.cat5;


    console.log(this.cat1);
    

      this.lineChartData=[
        {data: this.Data, label: "evolution de nombre d'utilisateurs"}
       ];
    this.lineChartLabels= this.Labels;


    this.doughnutChartLabels = ["Téléviseurs" , "Ampoules", "Électroménager" ,"Climatiseurs ", "Informatique"] ;
                 this.doughnutChartData = [ this.cat1 ,  this.cat4,  this.cat3 ,  this.cat5 ,  this.cat2] ;
                 this.doughnutChartType= 'doughnut';
                
this.msg1="le nombre totale d'utilisateurs est "+this.nbuser ;
this.msg2="le nombre totale de produit est "+ this.total ;
  }

  goToPageOne(){
    this.navCtrl.push(ProduitsPage);
  }

  goToPage(){
    this.navCtrl.push(PUserPage);
  }

  public lineChartOptions:any = {
    responsive: true
  };

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgb(255,165,0)',
      borderColor: 'rgb(0,0,0)',
      pointBackgroundColor: 'rgb(184,134,11)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(48,159,2,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  Deconnexion(){
    firebase.auth().signOut() ;
  this.navCtrl.setRoot(HomePage);
  }
  
  rapport(){
    this.navCtrl.push(RapportPage);  
  }

}
