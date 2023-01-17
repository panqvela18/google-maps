import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css'],
})
export class HourlyComponent {
  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  center: google.maps.LatLngLiteral = {
    lat: 41.995178646318074,
    lng: 43.97460830211639,
  };
  data: any;
  paramData: any;
  hourly: any;
  temperatures: any;
  windSpeed: any;
  region: any;

  @Input()markerPosition=''

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.paramData = params;

      this.center.lat = parseFloat(this.paramData.lat);
      this.center.lng = parseFloat(this.paramData.lng);

      this.weatherService
        .getData(this.center.lat, this.center.lng)
        .subscribe((result) => {
          this.data = result;

          let hours: number[] = this.data.hourly.time;
          this.hourly = hours;

          let temperature: number[] = this.data.hourly.temperature_2m;
          this.temperatures = temperature;

          let windspeeds: number[] = this.data.hourly.windspeed_10m;
          this.windSpeed = windspeeds;

          let region: string = this.data.timezone;
          this.region = region;
        });
    });
   
  }
}
