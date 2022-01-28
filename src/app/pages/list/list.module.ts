import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListPageRoutingModule } from './list-routing.module';

import { FilterPipe } from '../../pipes/filter.pipe';
import { ListPage } from './list.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListPage, FilterPipe]
})
export class ListPageModule {}
