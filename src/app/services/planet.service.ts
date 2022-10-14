import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet, PlanetResponse } from '../interfaces/planet.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  public getPlanets(number: number):Observable<PlanetResponse>{
    return this.http.get<PlanetResponse>(`${environment.baseUrlAPI}/planets/?page=${number}`);
  }

  public getPlanet(id: number):Observable<Planet>{
    return this.http.get<Planet>(`${environment.baseUrlAPI}/planets/${id}`);
  }

  public getByUrl(url: string):Observable<Planet>{
    return this.http.get<Planet>(url);
  }

}
