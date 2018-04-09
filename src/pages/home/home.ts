import { Component, ViewChild,Injectable, Injector } from '@angular/core';
import {  NavController, NavParams, AlertController,LoadingController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { EmailValidator } from '../../validators/email';
import { FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { ReciptionPage } from '../reciption/reciption';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  home: string;
  public usersRef :firebase.database.Reference;


  public loginForm: any;
  public loading: any;
   public error: any;
  public  test :boolean ;
  public Labels:any[] = [] ;
  public Data:any []= [] ;

	@ViewChild('username') user;
  @ViewChild('password') password;
  @ViewChild('cpassword') cpassword;

  public annonceRef: any;
  public annonceList: any;
  public loadedAnnonceList: any;
  public variable=false;
  public userRef :firebase.database.Reference;
  public productRef :firebase.database.Reference;

  total :number = 0 ;
  day : any  = new Date();
  dd : any  = this.day.getDate();
  mm : any  = this.day.getMonth()+1; //January is 0!

  user1 : number = 0 ;
  user2 : number = 0 ;
  user3 : number = 0 ;
  categ : any = ["1pac","1psc","2pm300","2pp300","4k","Ahublot","AsGu53cv","Au10cv","C120","C2140","C4180","Ctt","Gu10cv","Gu53cv","Imp120","Imp21100","ImpNB","Largeur45I","Largeur45Libre","Largeur60I","Largeur60Libre","NB120","NB2140","NB4180","TableTop","am230","ap230","aspirateurs","automatiques","capsules","ced","cem","climatiseurs","cm230","compatibles","cp230","flammes","imprimantes","multifonctions","opd","pouces1720","pouces2122","pouces23","pouces24","pouces27","sechelinge","taille70100","tailleinf70","taillesup100"];

  m1 : number = 0 ;
  m2 : number = 0 ;

  cat1 : number = 0 ;
  cat2 : number = 0  ;
  cat3 : number = 0  ;
  cat4 : number = 0 ;
  cat5 : number = 0  ;
  
  compteur : number = 0 ;


  constructor(private toastCtrl: ToastController,  private afauth:AngularFireAuth,public navCtrl: NavController,private alertCtrl: AlertController, private fire:AngularFireAuth,
    public navParams: NavParams, public formBuilder: FormBuilder, 
    public loadingCtrl: LoadingController, private afDb: AngularFireDatabase ) {
      this.home="login";
      this.usersRef = firebase.database().ref('/admins/' );
      this.userRef = firebase.database().ref('/users/');
      this.productRef = firebase.database().ref('/Products/');


      this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
    this.day = this.mm + '/' + this.dd ;

      if(this.mm==1) {
        this.m1=12 ;
        this.m2=11
      }
      else if (this.mm==2) {
        this.m1=1;
        this.m2=12;
      }
      else {
        this.m1=this.mm-1;
        this.m2=this.mm-2;
      }

      if(this.mm-1<0) {
        this.m2=11 ;
      }
      else {
        this.m2=this.mm-2;
      }
      
    this.userRef.on('value', produitList => {
  
      let produits = [];
      produitList.forEach( user => {
       

        this.total=this.total+1;

    if(Number ((user.val().date+"").substr(0,2)) ==this.mm ){
         this.user1=this.user1+ 1 ;
    }
    if(Number ((user.val().date+"").substr(0,2)) ==this.m1 ){
      this.user2=this.user2+ 1 ;
}
if(Number ((user.val().date+"").substr(0,2)) ==this.m2 ){
  this.user3=this.user3+ 1 ;
}
    
      return false ;})
console.log(this.user1);
console.log(this.user2);
console.log(this.user3);
    });

    for (let i of this.categ) {

      this.productRef = firebase.database().ref('/Products/'+i);

    this.productRef.on('value', produitList => {
      let ref : any = [] ;
      produitList.forEach( product => {
         
       this.compteur = this.compteur +1 ;
        if(product.val().Category=="cat1"){
          this.cat1=this.cat1+1;
        }else if(product.val().Category=="cat2"){
          this.cat2=this.cat2+1;
        }else if(product.val().Category=="cat3"){
          this.cat3=this.cat3+1;
        }else if(product.val().Category=="cat4"){
          this.cat4=this.cat4+1;
        }else {
          this.cat5=this.cat5+1;
        }
        
    
       
       
return false ;
    });
    console.log(this.compteur);
    console.log(this.cat1);
    

  });}


    if (this.mm==1) {

      this.Labels=["nouvembre" , "Decembre" ,"Janvier"]

    }else if (this.mm==2) {
      this.Labels=["Decembre" , "Janvier" ,"février"]
    
    }else if (this.mm==3) {
      this.Labels=[ "Janvier","Fevrier" ,"Mars"]

    
    }else if (this.mm==4) {
      this.Labels=["Fevrier" ,"Mars","Avril"]

    
    }else  if (this.mm==5) {
      this.Labels=["Mars","Avril","Mai"]

    
    }else if (this.mm==6) {
      this.Labels=["Avril","Mai","juin"]

    
    }else if (this.mm==7) {
      this.Labels=["Mai","juin","Juillet"]

    
    }else if (this.mm==8) {
      this.Labels=["juin","Juillet","Auot"]

    
    }else if (this.mm==9) {
      this.Labels=["Juillet","Auot","Septembre"]

    }else if (this.mm==10) {
      this.Labels=["Auot","Septembre","October"]

    
    }else if  (this.mm==11) {
      this.Labels=["Septembre","October","Nouvembre"]

    
    } else {
      this.Labels=["October","Nouvembre","Decembre"]

    }

  }

  registerUser() {
    if (!this.loginForm.valid){
    }

     else
    if (this.password!=this.cpassword) {
      this.presentToast("mot de passe et confirmation ne sont pas confondu!");}
      if (this.password=this.cpassword) {
         this.Data=[this.user3,this.user2,this.user1]
        console.log(this.Labels);
        console.log(this.Data);
        
        
        this.usersRef.push({
          email: this.user.value
        });
    this.fire.auth.createUserWithEmailAndPassword(this.user.value , this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.presentToast('Registered!');
      console.log(this.cat1);
      
     this.navCtrl.setRoot(ReciptionPage , 
        {
         data : this.Data ,
         label : this.Labels,
         cat1 : this.cat1,
         cat2 : this.cat2,
         cat3 : this.cat3,
         cat4 : this.cat4,
         cat5 : this.cat5,
         total : this.total 

        });

    })
    .catch(error => {
      console.log('got an error ', error);
      this.presentToast(error.message);
    });
    
    return true;
  }
}



  ///////////////
  facebook = {
    loggedIn : false,
    name : '',
    email : '',
    profilePicture: ''
  };

 

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  presentToast(msg : string ) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


 verif () {

 
 
 }


  EmailLogin() {

  this.verif() ;

    console.log( "main" +this.test);
    
    this.Data=[this.user3,this.user2,this.user1]
    console.log(this.Labels);
    console.log(this.Data);
    
   
    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      console.log('got some data', this.fire.auth.currentUser);
      this.presentToast('Success! You\'re logged in');
      this.navCtrl.setRoot(ReciptionPage, {
        data : this.Data ,
         label : this.Labels,
         cat1 : this.cat1,
         cat2 : this.cat2,
         cat3 : this.cat3,
         cat4 : this.cat4,
         cat5 : this.cat5,
         total : this.total 

      });
      // user is logged in
    })
    .catch( error => {
      console.log('got an error', error); 
      this.presentToast(error.message);
    })
  	console.log('Would sign in with ', this.user.value, this.password.value);
  }

  PushToSingup(){

    //this.navCtrl.push(RegisterPage);

  }
  id:string ;
  
  
initializeAnnonceItems(): void {
  this.annonceList = this.loadedAnnonceList;
}

 
  
  Facbooklogin() {
  this.afauth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
 .then(res => {
   console.log(res);
   

   // check if user exist in db
  this.afDb.list<any>('/admins', ref => ref.orderByChild('email').equalTo(res.user.email)).valueChanges().subscribe(data => {
  console.log('user exist', data);
   if (data && data.length == 0) {
      this.usersRef.push({
        email: res.user.email
      });
      //this.navCtrl.push(AddShoppingPage);
    }
    else{
      this.navCtrl.setRoot(ReciptionPage);
    }
   });
 })
 }

 

 resetPassword(){
  //this.navCtrl.push(ForgotPassPage);


 }
  

}




















