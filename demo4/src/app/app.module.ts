import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { StudentComponent }  from './student.component';
import {GradeComponent} from './Grade.component';

@NgModule({
  imports:      [ BrowserModule ,FormsModule],
  declarations: [ StudentComponent,GradeComponent ],
  bootstrap:    [ StudentComponent ]
})
export class AppModule { }
