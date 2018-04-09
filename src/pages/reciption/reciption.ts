import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitsPage } from '../produits/produits';
import * as firebase from 'firebase';

import { AngularFireDatabase ,AngularFireList} from 'angularfire2/database';
import { PUserPage } from '../../pages/p-user/p-user';

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


  constructor(private afDb: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams) {

    this.Labels = this.navParams.get('label') ;
    console.log("label" +this.Labels);
    this.userRef = firebase.database().ref('/users/');

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

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(250,59,30,0.2)',
      borderColor: 'rgba(250,59,03,1)',
      pointBackgroundColor: 'rgba(200,159,0,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(250,159,2,0.8)'
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
  

}
