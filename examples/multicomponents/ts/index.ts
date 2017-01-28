import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';


import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {CheckableItem} from './CheckableItem';
import {InputItem} from './InputItem';
import {Counter} from './Counter';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CheckableItem, InputItem, Counter ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);