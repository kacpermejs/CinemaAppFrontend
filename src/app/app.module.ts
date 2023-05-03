import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialModule } from './shared/shared.material.module';
import { MainNavComponent } from './core/main-nav/main-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    SharedMaterialModule,

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
