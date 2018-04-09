import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChartsModule } from 'ng2-charts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { ReciptionPage } from '../pages/reciption/reciption';
import { ProduitsPage } from '../pages/produits/produits';
import { AddProduitPage } from '../pages/add-produit/add-produit';
import { TvPage } from '../pages/tv/tv';
import { InfoPage } from '../pages/info/info';
import { ElecPage } from '../pages/elec/elec';
import { LampPage } from '../pages/lamp/lamp';
import { Tv1Page } from '../pages/tv1/tv1';
import { RecommandationPage } from '../pages/recommandation/recommandation';

import { Taille70100CmPage } from '../pages/taille70100cm/taille70100cm';
import { TailleSupRieure100CmPage } from '../pages/taille-sup-rieure100cm/taille-sup-rieure100cm';
import { KPage } from '../pages/k/k';
import { AspirateursPage } from '../pages/aspirateurs/aspirateurs';
import { AHublotPage } from '../pages/a-hublot/a-hublot';
import { OuvertureParLeDessusPage } from '../pages/ouverture-par-le-dessus/ouverture-par-le-dessus';
import { SCheLingePage } from '../pages/s-che-linge/s-che-linge';
import { CapsulesEtDosettesPage } from '../pages/capsules-et-dosettes/capsules-et-dosettes';
import { AutomatiquesPage } from '../pages/automatiques/automatiques';
import { Largeur45CmPoseLibrePage } from '../pages/largeur45cm-pose-libre/largeur45cm-pose-libre';
import { Largeur45CmIntGrablesPage } from '../pages/largeur45cm-int-grables/largeur45cm-int-grables';
import { Largeur60CmPoseLibrePage } from '../pages/largeur60cm-pose-libre/largeur60cm-pose-libre';

import { TtopPage } from '../pages/ttop/ttop';
import { PsCongelateurPage } from '../pages/ps-congelateur/ps-congelateur';
import { PaCongelateurPage } from '../pages/pa-congelateur/pa-congelateur';
import { Pm300litresPage } from '../pages/pm300litres/pm300litres';
import { Pp300litresPage } from '../pages/pp300litres/pp300litres';



import { Pouces1720Page } from '../pages/pouces1720/pouces1720';
import { Pouces2122Page } from '../pages/pouces2122/pouces2122';
import { Pouces23Page } from '../pages/pouces23/pouces23';
import { Pouces24Page } from '../pages/pouces24/pouces24';
import { Pouces27Page } from '../pages/pouces27/pouces27';
import { MultifonctionsPage } from '../pages/multifonctions/multifonctions';
import { ImprimantesPage } from '../pages/imprimantes/imprimantes';
import { CompatiblesPage } from '../pages/compatibles/compatibles';
import { FlammesPage } from '../pages/flammes/flammes';
import { CedPage } from '../pages/ced/ced';
import { CemPage } from '../pages/cem/cem';
import { FavPage } from '../pages/fav/fav';

import { Color1_21Page } from '../pages/color1-21/color1-21';
import { ClimatiseursPage } from '../pages/climatiseurs/climatiseurs';
import { Color21_40Page } from '../pages/color21-40/color21-40';
import { Color41_80Page } from '../pages/color41-80/color41-80';
import { GoToImprCouleur1_20Page } from '../pages/go-to-impr-couleur1-20/go-to-impr-couleur1-20';
import { NoirEtBlanc41_80Page } from '../pages/noir-et-blanc41-80/noir-et-blanc41-80';
import { NoirEtBlanc21_40Page } from '../pages/noir-et-blanc21-40/noir-et-blanc21-40';
import { ToImprCouleur21_100Page } from '../pages/to-impr-couleur21-100/to-impr-couleur21-100';
import { ToNoirEtBlanc1_20Page  } from '../pages/to-noir-et-blanc1-20/to-noir-et-blanc1-20';
import { NoirEtBlancPage  } from '../pages/noir-et-blanc/noir-et-blanc';


import { Largeur60cmIntePage  } from '../pages/largeur60cm-inte/largeur60cm-inte';
import { TabletopPage  } from '../pages/tabletop/tabletop';
import { PorteSansCongelateurPage  } from '../pages/1-porte-sans-congelateur/1-porte-sans-congelateur';
import { PorteAvecCongelateurPage  } from '../pages/1-porte-avec-congelateur/1-porte-avec-congelateur';
import {  PortesMoisDe300LitresPage } from '../pages/portes-mois-de300-litres/portes-mois-de300-litres';
import { PortesPlusDe300LitresPage  } from '../pages/portes-plus-de300-litres/portes-plus-de300-litres';
import {  ArmoirePlusDe230LPage } from '../pages/armoire-plus-de230-l/armoire-plus-de230-l';
import { ArmoireMoisDe230LPage  } from '../pages/armoire-mois-de230-l/armoire-mois-de230-l';
import {  CoffrePlus230LPage } from '../pages/coffre-plus230-l/coffre-plus230-l';
import { CoffreMois230LPage  } from '../pages/coffre-mois230-l/coffre-mois230-l';


import { Gu10CompatiblesPage  } from '../pages/gu10-compatibles/gu10-compatibles';
import { ClassiqueEclerageFortPage  } from '../pages/classique-eclerage-fort/classique-eclerage-fort';
import { AutreSpotsPage  } from '../pages/autre-spots/autre-spots';
import { Gu53Page  } from '../pages/gu53/gu53';
import { AutresSpotsGu53Page  } from '../pages/autres-spots-gu53/autres-spots-gu53';


import { UpdateTvPage } from '../pages/update-tv/update-tv';
import { UpdateTVpcPage } from '../pages/update-t-vpc/update-t-vpc';
import { UpdateImprimantePage } from '../pages/update-imprimante/update-imprimante';
import { UpdateAspirateurPage } from '../pages/update-aspirateur/update-aspirateur';
import { UpdateAspPage } from '../pages/update-asp/update-asp';
import { UpdatecafePage } from '../pages/updatecafe/updatecafe';
import { UpdatelavelingePage } from '../pages/updatelavelinge/updatelavelinge';
import { UpdateRefrigPage } from '../pages/update-refrig/update-refrig';
import { UpdateSpotaledPage } from '../pages/update-spotaled/update-spotaled';
import { UpdateClimatiseurPage } from '../pages/update-climatiseur/update-climatiseur';
import { UpdateLaveVaiPage } from '../pages/update-lave-vai/update-lave-vai';
import { AddTvPage } from '../pages/add-tv/add-tv';
import { AddLampesPage } from '../pages/add-lampes/add-lampes';
import { AddEcransPage } from '../pages/add-ecrans/add-ecrans';
import { AddImpPage } from '../pages/add-imp/add-imp';
import { AddFriPage } from '../pages/add-fri/add-fri';
import { ATvPage } from '../pages/a-tv/a-tv';
import { AElecPage } from '../pages/a-elec/a-elec';
import { AInfoPage } from '../pages/a-info/a-info';
import { ALampesPage } from '../pages/a-lampes/a-lampes';
import { AClimPage } from '../pages/a-clim/a-clim';
import { ARecPage } from '../pages/a-rec/a-rec';
import { AjoutTVPage } from '../pages/ajout-tv/ajout-tv';
import { AjoutTvPcPage } from '../pages/ajout-tv-pc/ajout-tv-pc';
import { AjoutImprimantePage } from '../pages/ajout-imprimante/ajout-imprimante';
import { AjoutAspirateurPage } from '../pages/ajout-aspirateur/ajout-aspirateur';
import { AjoutMachineCafePage } from '../pages/ajout-machine-cafe/ajout-machine-cafe';
import { AjoutLaveLingePage } from '../pages/ajout-lave-linge/ajout-lave-linge';
import { AjoutLaveVaissellePage } from '../pages/ajout-lave-vaisselle/ajout-lave-vaisselle';
import { AjoutRefrigerateurPage } from '../pages/ajout-refrigerateur/ajout-refrigerateur';
import { AjoutAmplouleLedPage } from '../pages/ajout-amploule-led/ajout-amploule-led';
import { AjoutSpotLedPage } from '../pages/ajout-spot-led/ajout-spot-led';
import { AjoutClimatiseurPage } from '../pages/ajout-climatiseur/ajout-climatiseur';


import { PUserPage } from '../pages/p-user/p-user';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReciptionPage,
    ProduitsPage,
    AddProduitPage,
    MyApp,AutresSpotsGu53Page,

    RecommandationPage,
    TvPage,Gu53Page,
    InfoPage,
    ElecPage,
    LampPage,UpdateTVpcPage,
    Tv1Page,
    Taille70100CmPage,
    TailleSupRieure100CmPage,
    KPage,PsCongelateurPage,
    AspirateursPage,
    AHublotPage,ClassiqueEclerageFortPage,
    OuvertureParLeDessusPage,
    SCheLingePage,PaCongelateurPage,
    CapsulesEtDosettesPage,UpdateImprimantePage,
    AutomatiquesPage,TtopPage,UpdateAspirateurPage,
    Largeur45CmPoseLibrePage,
    Largeur45CmIntGrablesPage,Pm300litresPage,Pp300litresPage,
    Largeur60CmPoseLibrePage,ClimatiseursPage,Gu10CompatiblesPage,UpdateTvPage,UpdatelavelingePage,
    
    Pouces1720Page,Pouces2122Page,Pouces23Page,Pouces24Page,UpdateAspPage,UpdatecafePage,UpdatelavelingePage,
    Pouces27Page,ImprimantesPage,MultifonctionsPage,CompatiblesPage,FlammesPage,CedPage,CemPage,FavPage,
    Color1_21Page,Color21_40Page,Color41_80Page,GoToImprCouleur1_20Page,NoirEtBlanc41_80Page,NoirEtBlanc21_40Page,ToImprCouleur21_100Page,ToNoirEtBlanc1_20Page,
    Largeur60cmIntePage,PorteSansCongelateurPage,PorteAvecCongelateurPage,
    PortesMoisDe300LitresPage,PortesPlusDe300LitresPage,UpdateRefrigPage,
    
    ArmoirePlusDe230LPage,ArmoireMoisDe230LPage,CoffrePlus230LPage,CoffreMois230LPage,
   Largeur60CmPoseLibrePage,UpdateClimatiseurPage,
   Largeur45CmPoseLibrePage,
   Largeur45CmIntGrablesPage,UpdateSpotaledPage,
   TabletopPage,UpdateLaveVaiPage,
   AutreSpotsPage,
   AddTvPage,PUserPage,
   AddLampesPage,
   AddEcransPage,
   AddImpPage,
   AddFriPage,
   ATvPage,
   AElecPage,
   AInfoPage,
   ALampesPage,
   AClimPage,
   ARecPage,
   AjoutTVPage,
   AjoutTvPcPage,
    AjoutImprimantePage,
    AjoutAspirateurPage,
    AjoutMachineCafePage,
    AjoutLaveLingePage,
    AjoutLaveVaissellePage,
    AjoutRefrigerateurPage,
    AjoutAmplouleLedPage,
    AjoutSpotLedPage,
    AjoutClimatiseurPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    // Initialise AngularFire with credientials from the dashboard
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the AngularFireDatabaseModule to use database interactions
    AngularFireDatabaseModule, AngularFireAuthModule,ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReciptionPage,
    ProduitsPage,
    AddProduitPage,
    MyApp,AutresSpotsGu53Page,

    RecommandationPage,UpdateTVpcPage,
    TvPage,Gu53Page,
    InfoPage,
    ElecPage,
    LampPage,
    Tv1Page,PsCongelateurPage,
    Taille70100CmPage,
    TailleSupRieure100CmPage,
    KPage,
    AspirateursPage,
    AHublotPage,ClassiqueEclerageFortPage,
    OuvertureParLeDessusPage,UpdateImprimantePage,
    SCheLingePage,
    CapsulesEtDosettesPage,TtopPage,UpdateAspirateurPage,
    AutomatiquesPage,
    Largeur45CmPoseLibrePage,PaCongelateurPage,UpdateAspPage,
    Largeur45CmIntGrablesPage,Pm300litresPage,Pp300litresPage,
    Largeur60CmPoseLibrePage,ClimatiseursPage,Gu10CompatiblesPage,UpdateTvPage,UpdatelavelingePage,
    
    Pouces1720Page,Pouces2122Page,Pouces23Page,Pouces24Page,UpdatelavelingePage,
    Pouces27Page,ImprimantesPage,MultifonctionsPage,
    CompatiblesPage,FlammesPage,CedPage,CemPage,FavPage,UpdatecafePage,
    Color1_21Page,Color21_40Page,Color41_80Page,GoToImprCouleur1_20Page,
    NoirEtBlanc41_80Page,NoirEtBlanc21_40Page,ToImprCouleur21_100Page,
    ToNoirEtBlanc1_20Page,
    Largeur60cmIntePage,PorteSansCongelateurPage,PorteAvecCongelateurPage,
    PortesMoisDe300LitresPage,PortesPlusDe300LitresPage,
    ArmoirePlusDe230LPage,PUserPage,
    ArmoireMoisDe230LPage,CoffrePlus230LPage,CoffreMois230LPage
    ,Largeur60CmPoseLibrePage,UpdateRefrigPage,
   Largeur45CmPoseLibrePage,UpdateClimatiseurPage,
   Largeur45CmIntGrablesPage,UpdateLaveVaiPage,
   TabletopPage,UpdateSpotaledPage,
   AutreSpotsPage,
   AddTvPage,
   AddLampesPage,
   AddEcransPage,
   AddImpPage,
   AddFriPage,
   ATvPage,
   AElecPage,
   AInfoPage,
   ALampesPage,
   AClimPage,
   ARecPage,
   AjoutTVPage,
   AjoutTvPcPage,
    AjoutImprimantePage,
    AjoutAspirateurPage,
    AjoutMachineCafePage,
    AjoutLaveLingePage,
    AjoutLaveVaissellePage,
    AjoutRefrigerateurPage,
    AjoutAmplouleLedPage,
    AjoutSpotLedPage,
    AjoutClimatiseurPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
