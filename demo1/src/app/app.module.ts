import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { App1Component }  from './app1.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, App1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
