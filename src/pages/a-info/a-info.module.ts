import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AInfoPage } from './a-info';

@NgModule({
  declarations: [
    AInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AInfoPage),
  ],
})
export class AInfoPageModule {}
