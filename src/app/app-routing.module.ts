import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  // {
  //   path: 'create-new',
  //   loadChildren: () => import('./pages/create-new/create-new.module').then( m => m.CreateNewPageModule)
  // },
  // {
  //   path: 'list',
  //   loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  // },
  {
    path: 'view-by-id/:id',
    loadChildren: () => import('./pages/view-by-id/view-by-id.module').then( m => m.ViewByIdPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
