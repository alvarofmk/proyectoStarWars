import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarshipResponse } from '../interfaces/starship.interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) { }

  public getShips(number: number):Observable<StarshipResponse>{
    return this.http.get<StarshipResponse>(`${environment.baseUrlAPI}/starships/?page=${number}`);
  }

}
