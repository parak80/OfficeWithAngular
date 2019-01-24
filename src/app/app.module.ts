import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { SearchComponent } from './components/search/search.component';
import { DateComponent } from './date/date/date.component';
import { TableComponent } from './components/table/table.component';

import { AppConfigService } from './services/app-config.service';
import { AppService } from './services/app.service';
import { FakeBackendService } from './services/fake-backend.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    SearchComponent,
    DateComponent,
    TableComponent
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
