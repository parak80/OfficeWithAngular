import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'appNav', component: AppNavComponent },
    { path: 'search', component: SearchComponent },
    { path: 'table' , component: TableComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes /*, { enableTracing: true }*/)],
    exports: [RouterModule],
    providers: []
  })

  export class AppRoutingModule { }
