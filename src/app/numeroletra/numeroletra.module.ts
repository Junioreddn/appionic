import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumeroletraPageRoutingModule } from './numeroletra-routing.module';

import { NumeroletraPage } from './numeroletra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumeroletraPageRoutingModule
  ],
  declarations: [NumeroletraPage]
})
export class NumeroletraPageModule {}
