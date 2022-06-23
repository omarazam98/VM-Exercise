import {Component, OnInit} from '@angular/core';
import {LocationsData, WeatherData} from "./weather.model";
import { from, mergeMap, map } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['./weather.component.scss'],
})

export class WeatherComponent implements OnInit {
  weatherData: WeatherData[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getGeoCodes()
    console.log(this.weatherData)
  }

  getGeoCodes() {
    from(LocationsData)
      .pipe(
        mergeMap((location) =>
          this.weatherService.getWeather(location.lat, location.lon)
        )
      )
      .pipe(
        map((weatherData) => {
          console.log(weatherData)
          return {
            temp: weatherData.main.temp,
            temp_max: weatherData.main.temp_max,
            temp_min: weatherData.main.temp_min,
            humidity: weatherData.main.humidity,
            chanceRain: weatherData.clouds.all,
            name: weatherData.name,
          };
        })
      )
      .subscribe((x) => {
        this.weatherData.push(x);
      });
  }
}
