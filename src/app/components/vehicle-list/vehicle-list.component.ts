import { Component, OnInit } from '@angular/core';
import { VehicleResponse } from 'src/app/interfaces/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {


  list: VehicleResponse = {} as VehicleResponse;
  page: number = 1;
  maxPages: number = 0;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/vehicles/"

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles(this.page).subscribe(response =>{
      this.list = response;
      this.maxPages = Math.ceil(response.count/response.results.length);
    }) 
  }

  public changePage(number: number){
    this.page = number;
    this.vehicleService.getVehicles(this.page).subscribe(response => this.list = response);
  }

  counter() {
    return new Array(this.maxPages);
  }

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
