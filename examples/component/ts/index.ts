import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {CheckableItem} from './CheckableItem';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CheckableItem ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);