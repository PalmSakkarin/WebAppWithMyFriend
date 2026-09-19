import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PluemPage } from './pluem-page/pluem-page';
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';
import { Pluem } from './pages/pluem/pluem';
import { PalmPage } from './palm-page/palm-page';
import { Sidebar } from './layout/sidebar/sidebar';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { Dashboard } from './layout/dashboard/dashboard';

@NgModule({
  declarations: [
    App,
    PluemPage,
    Home,
    Header,
    Pluem,
    PalmPage,
    Sidebar,
    Navbar,
    Footer,
    Dashboard,
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
