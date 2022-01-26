import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

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
    redirectTo: '/tab/list'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
