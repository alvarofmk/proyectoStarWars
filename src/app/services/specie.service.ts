import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SpecieResponse } from '../interfaces/specie.interface';

@Injectable({
  providedIn: 'root',
})
export class SpecieService {
  constructor(private http: HttpClient) {}

  public getSpecies(number: number): Observable<SpecieResponse> {
    return this.http.get<SpecieResponse>(
      `${environment.baseUrlAPI}/species/?page=${number}`
    );
  }
}