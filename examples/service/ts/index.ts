import 'zone.js/dist/zone';
import 'reflect-metadata';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {ItemList} from './ItemList';
import {CheckableItem} from './CheckableItem';
import {InputItem} from './InputItem';
import {Counter} from './Counter';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ItemList, CheckableItem, InputItem, Counter ],
  bootstrap:    [ AppComponent ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);