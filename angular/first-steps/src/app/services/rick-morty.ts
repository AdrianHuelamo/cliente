import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { infoApiRM } from '../common/rminterface';

@Injectable({
  providedIn: 'root',
})
export class RickMorty {
  private URI: string = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) {
   
  }

  getCharacters(): Observable<infoApiRM>{
    return this.http.get<infoApiRM>(this.URI);
  }



}

