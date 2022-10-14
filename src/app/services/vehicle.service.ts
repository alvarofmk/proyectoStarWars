import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle, VehicleResponse } from '../interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  public getVehicles(number: number):Observable<VehicleResponse>{
    return this.http.get<VehicleResponse>(`${environment.baseUrlAPI}/vehicles/?page=${number}`);
  }

  public getVehicle(id: number):Observable<Vehicle>{
    return this.http.get<Vehicle>(`${environment.baseUrlAPI}/vehicles/${id}`);
  }

  public getByUrl(url: string):Observable<Vehicle>{
    return this.http.get<Vehicle>(url);
  }

}
