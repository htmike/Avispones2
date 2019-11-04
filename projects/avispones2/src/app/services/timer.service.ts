import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  url: string;

  constructor( private http: HttpClient ) {
    this.url = 'http://localhost:7373/';
  }

  getTimer(): Observable<any> {
    return this.http.get(this.url + 'timer');
  }
}
