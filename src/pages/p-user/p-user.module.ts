import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PUserPage } from './p-user';

@NgModule({
  declarations: [
    PUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PUserPage),
  ],
})
export class PUserPageModule {}
