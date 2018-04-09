import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddFriPage } from './add-fri';

@NgModule({
  declarations: [
    AddFriPage,
  ],
  imports: [
    IonicPageModule.forChild(AddFriPage),
  ],
})
export class AddFriPageModule {}
