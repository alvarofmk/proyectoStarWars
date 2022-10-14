import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeopleResponse, Person } from '../interfaces/people.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) {}

  public getCharacters(number: number):Observable<PeopleResponse>{
    return this.http.get<PeopleResponse>(`${environment.baseUrlAPI}/people/?page=${number}`);
  }

  public getCharacter(id: number):Observable<Person>{
    return this.http.get<Person>(`${environment.baseUrlAPI}/people/${id}`);
  }

  public getByUrl(url: string):Observable<Person>{
    return this.http.get<Person>(url);
  }
}
