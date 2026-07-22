import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PluemPage } from './pluem-page/pluem-page';
import { PalmPage } from './palm-page/palm-page';
import { Sidebar } from './layout/sidebar/sidebar';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Dashboard } from './layout/dashboard/dashboard';
import { Home } from './home/home';

@NgModule({
  declarations: [
    App,
    PluemPage,
    PalmPage,
    Sidebar,
    Navbar,
    Footer,
    Dashboard,
    Home
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
