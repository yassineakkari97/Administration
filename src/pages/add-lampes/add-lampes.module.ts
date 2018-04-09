import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLampesPage } from './add-lampes';

@NgModule({
  declarations: [
    AddLampesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddLampesPage),
  ],
})
export class AddLampesPageModule {}
