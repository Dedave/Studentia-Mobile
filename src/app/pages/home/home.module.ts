import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { Routes, RouterModule } from '@angular/router'



const routes: Routes=[
  {
    path: 'home',
    component: HomePage,
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
    redirectTo: '/home/list'
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
