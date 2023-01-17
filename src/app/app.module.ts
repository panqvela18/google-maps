import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import {HttpClientModule} from '@angular/common/http'
 import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { DailyComponent } from './daily/daily.component';
import { HourlyComponent } from './hourly/hourly.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';


// @Injectable({
//   providedIn:'root'
// })

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    HourlyComponent,
    GoogleMapsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
