import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getData(
    lat: number ,
    lng: number
  ): Observable<any> {
    return this.http.get<any>(
      `api/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m,windspeed_10m&daily=temperature_2m_max,windspeed_10m_max&timezone=auto&start_date=2023-01-10&end_date=2023-01-15`
    );
  }
}
