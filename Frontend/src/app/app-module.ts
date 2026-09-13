import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PluemPage } from './pluem-page/pluem-page';
import { Home } from './pages/home/home';
import { Header } from './layout/header/header';
import { Pluem } from './pages/pluem/pluem';

@NgModule({
  declarations: [
    App,
    PluemPage,
    Home,
    Header,
    Pluem
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
export class AppModule { }
