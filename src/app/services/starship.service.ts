import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Starship, StarshipResponse } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { }

  public getShips(number: number):Observable<StarshipResponse>{
    return this.http.get<StarshipResponse>(`${environment.baseUrlAPI}/starships/?page=${number}`);
  }

  public getShip(id: number):Observable<Starship>{
    return this.http.get<Starship>(`${environment.baseUrlAPI}/starships/${id}`);
  }

  public getByUrl(url: string):Observable<Starship>{
    return this.http.get<Starship>(url);
  }

}
