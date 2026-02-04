import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoValorant } from '../common/valorantinterface';

@Injectable({
  providedIn: 'root',
})
export class Valorantservices {
    private URI: string = "https://valorant-api.com/v1/agents";

    constructor(private http: HttpClient) {

  }

  getCharacters(): Observable<InfoValorant> {
      return this.http.get<InfoValorant>(`${this.URI}`);
  }
}
