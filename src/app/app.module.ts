import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteComponent } from './site/site.component';
import { AdminComponent } from './admin/admin.component';
import { NgwWowModule } from 'ngx-wow';


const routes: Routes = [
  { path: 'site', component: SiteComponent },
  {
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  
  { path: '**', component: SiteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NgwWowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
