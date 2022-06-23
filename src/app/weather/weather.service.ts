import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Locations, LocationsData } from './weather.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    const params = new HttpParams().set("lat", lat).set("lon", lon)

    return this.http.get(
      `${environment.apiPrefix}data/2.5/weather?${params}&appid=${environment.weatherApiKey}`
    );
  }
  getMap(): Observable<any>{
    return this.http.get(
      'weathermap?basemap=map&cities=false&layer=windspeed&lat=30&lon=-20&zoom=1'
    )
  }
}
