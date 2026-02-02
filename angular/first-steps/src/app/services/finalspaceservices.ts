import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InfoFinalspace } from '../common/final-spaceinterface';

@Injectable({
  providedIn: 'root',
})
export class Finalspaceservices {
    private URI: string = "https://finalspaceapi.com/api/v0/character";

    constructor(private http: HttpClient) {

  }

  getCharacters(): Observable<InfoFinalspace> {
      return this.http.get<InfoFinalspace>(`${this.URI}`);
  }
}
