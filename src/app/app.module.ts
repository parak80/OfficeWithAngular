import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './components/home/home-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule} from '@angular/material';
// import { PopupModule } from '@angular/cdk/collections/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { SearchComponent } from './components/search/search.component';
import { DateComponent } from './date/date/date.component';
import { TableComponent } from './components/table/table.component';
import { IconColumnComponent } from './components/icon-column/icon-column.component';
import { DialogComponent } from './components/dialog/dialog.component';
// import { CourseDialogComponent } from '';

import { AppConfigService } from './services/app-config.service';
import { AppService } from './services/app.service';
import { FakeBackendService } from './services/fake-backend.service';
// import { Mat_DialogData } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavComponent,
    SearchComponent,
    DateComponent,
    TableComponent,
    IconColumnComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HomeRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(FakeBackendService)
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
