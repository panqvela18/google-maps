import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public data: any;
  public temperatures: any;
  public dailyTempMax: any;
  public windSpeed: any;
  public dailyMaxWindSpeed: any;
  public region: any;
  public hourly: any;
  public daily: any;
  public showHourlyData: boolean = true;
  public showDailyData: boolean = false;
  public lsData:any

  title: string = 'Google Map Project';
  subtitle: string = 'Click on map and get information about weather';
  zoom: number = 4;
  center: google.maps.LatLngLiteral = {
    lat: 41.995178646318074,
    lng: 43.97460830211639,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [];

  constructor(
    private httpClient: HttpClient,
    private route: Router,
  ) {}
  hourlyClick() {
    if (this.showHourlyData) {
      this.showHourlyData = this.showHourlyData;
    } else {
      this.showHourlyData = !this.showHourlyData;
      this.showDailyData = !this.showDailyData;
    }
  }

  dailyClick() {
    if (this.showDailyData) {
      this.showDailyData = this.showDailyData;
    } else {
      this.showDailyData = !this.showDailyData;
      this.showHourlyData = !this.showHourlyData;
    }
  }
  mapClick(event: google.maps.MapMouseEvent) {
    this.markerPositions = [];
    if (event.latLng != null) {
      this.center = event.latLng.toJSON();
      this.httpClient
        .get(
          `/api/v1/forecast?latitude=${this.center.lat}&longitude=${this.center.lng}&hourly=temperature_2m,windspeed_10m&daily=temperature_2m_max,windspeed_10m_max&timezone=auto&start_date=2023-01-10&end_date=2023-01-15`
        )
        .subscribe((res) => {
          this.data = res;
          let hours: number[] = this.data.hourly.time;
          this.hourly = hours;

          let temperature: number[] = this.data.hourly.temperature_2m;
          this.temperatures = temperature;

          let windspeeds: number[] = this.data.hourly.windspeed_10m;
          this.windSpeed = windspeeds;

          let dailyMaxTemp: number[] = this.data.daily.temperature_2m_max;
          this.dailyTempMax = dailyMaxTemp;

          let dailyMaxSpeed: number[] = this.data.daily.windspeed_10m_max;
          this.dailyMaxWindSpeed = dailyMaxSpeed;

          let dailyDate: number[] = this.data.daily.time;
          this.daily = dailyDate;

          let region: string = this.data.timezone;
          this.region = region;
        });

      this.markerPositions.push(event.latLng.toJSON());
      this.route.navigate([], {
        queryParams: {
          lat: this.center.lat.toFixed(2),
          lng: this.center.lng.toFixed(2),
        },
      });
      localStorage.setItem(('data'),JSON.stringify(this.data))
      this.lsData = localStorage.getItem('data')
      console.log(localStorage.getItem('data'))
   
    }
    
  }


  ngOnInit(){
    
  }
}
