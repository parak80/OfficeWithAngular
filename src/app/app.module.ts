import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { SearchComponent } from './components/search/search.component';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { DateComponent } from './date/date/date.component';

import { AppService } from './app.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeBackendService } from './fake-backend.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    SearchComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HomeRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
