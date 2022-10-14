import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film, FilmResponse } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  public getFilms(number: number): Observable<FilmResponse> {
    return this.http.get<FilmResponse>(
      `${environment.baseUrlAPI}/films/?page=${number}`
    );
  }

  public getByUrl(url: string):Observable<Film>{
    return this.http.get<Film>(url);
  }
}
