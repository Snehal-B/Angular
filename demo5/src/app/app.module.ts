import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SimpleService } from './simple.service';
import { AppComponent }  from './app.component';
import { App1Component }  from './app1.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,App1Component ],
  bootstrap:    [ AppComponent,App1Component ],
  providers:[SimpleService]
})
export class AppModule { }
