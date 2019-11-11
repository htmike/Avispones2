import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../modules/screen/classes/team';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataScore } from '../classes/data';

@Injectable({
  providedIn: 'root',

})
export class ScoreService {
  mainUrl: string;
  constructor( private http: HttpClient ) {
    this.mainUrl = 'localhost:7373';
  }

  getScoreById( id: number ): Observable<Team> {
    return this.http.get<Team>(`http://${this.mainUrl}/score/${id}`);
  }

  updateScoreById( id: number, body: any ): any {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post<Team>(`http://${this.mainUrl}/score/${id}`, body, { headers }).subscribe( response => {
      return response;
    });
  }

  getExtra(): Observable<DataScore> {
    return this.http.get<DataScore>(`http://${this.mainUrl}/data`);
  }

  updateExtra( body: any) {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(`http://${this.mainUrl}/data`, body, {headers}).subscribe( response => {
      return response;
    });
  }
}
