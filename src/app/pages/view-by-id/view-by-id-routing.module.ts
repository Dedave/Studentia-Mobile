import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewByIdPage } from './view-by-id.page';

const routes: Routes = [
  {
    path: '',
    component: ViewByIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewByIdPageRoutingModule {}
