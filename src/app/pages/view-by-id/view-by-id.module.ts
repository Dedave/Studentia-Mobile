import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewByIdPageRoutingModule } from './view-by-id-routing.module';

import { ViewByIdPage } from './view-by-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ViewByIdPageRoutingModule
  ],
  declarations: [ViewByIdPage]
})
export class ViewByIdPageModule {}
