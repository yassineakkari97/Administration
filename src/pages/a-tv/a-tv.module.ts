import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ATvPage } from './a-tv';

@NgModule({
  declarations: [
    ATvPage,
  ],
  imports: [
    IonicPageModule.forChild(ATvPage),
  ],
})
export class ATvPageModule {}
