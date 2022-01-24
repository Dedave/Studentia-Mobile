import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';
import { Routes, RouterModule } from '@angular/router'

 
const routes: Routes=[
  {
    path: 'tab',
    component: TabPage,
    children:[
      {
        path: 'list',
        loadChildren: () => import('../list/list.module').then( m => m.ListPageModule)
   
      },
      {
           path: 'create-new',
           loadChildren: () => import('../create-new/create-new.module').then( m => m.CreateNewPageModule)
        }
        
    ]
  },
  {
    path: '',
    redirectTo: '/tab/tab/list'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabPage]
})
export class TabPageModule {}
