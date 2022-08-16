import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TemplComponent } from './templ/templ.component';
import { TableComponent } from './table/table.component';
import { FindMyStuffComponent } from './find-my-stuff/find-my-stuff.component';

import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    TemplComponent,
    TableComponent,
    FindMyStuffComponent,
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
