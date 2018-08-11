import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms'
import { SimpleService } from './simple.service';
import { AppComponent }  from './app.component';
import { App1Component }  from './app1.component';
import { App2Component }  from './app2.component';

@NgModule({
  imports:      [ BrowserModule , HttpModule,FormsModule],
  declarations: [ AppComponent,App1Component ,App2Component],
  bootstrap:    [ AppComponent,App1Component ,App2Component],
  providers: [SimpleService]
})
export class AppModule { }
