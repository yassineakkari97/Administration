import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTvPage } from './add-tv';

@NgModule({
  declarations: [
    AddTvPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTvPage),
  ],
})
export class AddTvPageModule {}
