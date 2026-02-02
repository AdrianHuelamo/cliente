import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../common/disneyinterface';

@Injectable({
  providedIn: 'root',
})
export class Disneyservices {
  private URI: string = "https://api.disneyapi.dev/character/";

  constructor(private http: HttpClient) {

  }

  getCharacters(page: number = 1): Observable<Root> {
    return this.http.get<Root>(`${this.URI}?page=${page}`);
  }
}
