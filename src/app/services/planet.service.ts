import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlanetResponse } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  public getPlanets(number: number):Observable<PlanetResponse>{
    return this.http.get<PlanetResponse>(`${environment.baseUrlAPI}/starships/?page=${number}`);
  }

}
