import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProduitPage } from './add-produit';

@NgModule({
  declarations: [
    AddProduitPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProduitPage),
  ],
})
export class AddProduitPageModule {}
