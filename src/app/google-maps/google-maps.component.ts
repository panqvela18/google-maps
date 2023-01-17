import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  zoom: number = 4;
  center: google.maps.LatLngLiteral = {
    lat: 41.995178646318074,
    lng: 43.97460830211639,
  };
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  markerPositions: google.maps.LatLngLiteral[] = [
    {
      lat: this.center.lat,
      lng: this.center.lng,
    },
  ];

  constructor(private route: Router) {}
  hourlyClick() {
    this.route.navigate(['weather/hourly'], {
      queryParams: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
    });
  }

  dailyclick() {
    this.route.navigate(['weather/daily'], {
      queryParams: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
    });
  }

  mapClick(event: google.maps.MapMouseEvent) {
    this.markerPositions = [];
    if (event.latLng != null) {
      this.center = event.latLng.toJSON();
      this.markerPositions.push(event.latLng.toJSON());
      this.route.navigate([], {
        queryParams: {
          lat: this.center.lat.toFixed(2),
          lng: this.center.lng.toFixed(2),
        },
      });
    }
  }
  ngOnInit(): void {
    this.markerPositions=[
      {
        lat:this.center.lat,
        lng:this.center.lng
      }
    ]
    console.log(this.markerPositions)
  }

}
