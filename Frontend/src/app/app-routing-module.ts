import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './home/home';
import { PalmPage } from '../app/palm-page/palm-page';
import { PluemPage } from './pluem-page/pluem-page';

const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: "palm-page",
    component: PalmPage
  },

  {
    path: "pluem-page",
    component: PluemPage
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
