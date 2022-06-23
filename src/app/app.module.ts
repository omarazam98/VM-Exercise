import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WeatherComponent} from "./weather/weather.component";
import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule } from '@angular/common/http';
import {WeatherCardComponent} from "./weather/weather-card/weather-card.component";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
