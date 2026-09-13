import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PluemPage } from './pluem-page/pluem-page';
<<<<<<< HEAD
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';
import { Pluem } from './pages/pluem/pluem';
=======
import { PalmPage } from './palm-page/palm-page';
import { Sidebar } from './layout/sidebar/sidebar';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Dashboard } from './layout/dashboard/dashboard';
import { Home } from './home/home';
>>>>>>> 5af19b3f1c903903f65bd40504a9b6ca66fae7f6

@NgModule({
  declarations: [
    App,
    PluemPage,
<<<<<<< HEAD
    Home,
    Header,
    Pluem
=======
    PalmPage,
    Sidebar,
    Navbar,
    Footer,
    Dashboard,
    Home
>>>>>>> 5af19b3f1c903903f65bd40504a9b6ca66fae7f6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {

}
