import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Infodragonball } from '../common/dragonballinterface';

@Injectable({
  providedIn: 'root',
})
export class Dragonballservices {
  private URI: string = "https://dragonball-api.com/api/characters";

    constructor(private http: HttpClient) {

  }

  getCharacters(page: number = 1, limit: number = 6): Observable<Infodragonball> {
    return this.http.get<Infodragonball>(`${this.URI}?page=${page}&limit=${limit}`);
  }
} 