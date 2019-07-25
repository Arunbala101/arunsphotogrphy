import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterModule} from '@angular/router';
import { approute } from './routing/approutes';
import { NewComponent } from './new/new.component';
import { HomeComponent } from './homepage/homepage.component';
import {passwordcheck} from './new/custom.directive';
import { RoutegaurdsComponent } from './routegaurds/routegaurds.component';
import {NextComponent} from './next/next.component'

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    passwordcheck,
    NewComponent,
    HomeComponent,
    RoutegaurdsComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
