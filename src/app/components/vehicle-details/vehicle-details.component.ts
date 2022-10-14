import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/interfaces/vehicle.interface';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  id: number = 0;
  vehicle: Vehicle = {} as Vehicle;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/vehicles/"

  constructor(private route: ActivatedRoute, private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => this.id = parametros['id']);
    this.vehicleService.getVehicle(this.id).subscribe(response => this.vehicle = response);
  }

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
