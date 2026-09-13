import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Pluem } from './pages/pluem/pluem';

<<<<<<< HEAD
const routes: Routes = [
  { path: '', component: Home },
  { path: 'pluem', component: Pluem },
  { path: '**', redirectTo: '' }
=======
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

>>>>>>> 5af19b3f1c903903f65bd40504a9b6ca66fae7f6
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
