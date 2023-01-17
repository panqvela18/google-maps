import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css'],
})
export class DailyComponent {
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
  dailyMaxTemp: any;
  paramData: any;
  dailyMaxWindSpeed: any;
  daily: any;
  region: any;
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: this.center.lat,
      lng: this.center.lng,
    },
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.paramData = params;

      this.center.lat = parseFloat(this.paramData.lat);
      this.center.lng = parseFloat(this.paramData.lng);

      this.weatherService
        .getData(this.center.lat, this.center.lng)
        .subscribe((result) => {
          this.data = result;
          let dailyMaxTemp: number[] = this.data.daily.temperature_2m_max;
          this.dailyMaxTemp = dailyMaxTemp;

          let dailyMaxSpeed: number[] = this.data.daily.windspeed_10m_max;
          this.dailyMaxWindSpeed = dailyMaxSpeed;

          let dailyDate: number[] = this.data.daily.time;
          this.daily = dailyDate;

          let region: string = this.data.timezone;
          this.region = region;
        });

    });
    this.router.navigate(['weather/daily'], {
      queryParams: {
        
        lat: this.center.lat.toFixed(2),
        lng: this.center.lng.toFixed(2),
      },
    });
  }
}
