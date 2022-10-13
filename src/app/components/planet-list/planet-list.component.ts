import { Component, OnInit } from '@angular/core';
import { PlanetResponse } from 'src/app/interfaces/planet.interface';
import { PlanetService } from 'src/app/services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  list: PlanetResponse = {} as PlanetResponse;
  page: number = 1;
  maxPages: number = 0;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/planets/"

  constructor(private planetService: PlanetService) { }

  ngOnInit(): void {
    this.planetService.getPlanets(this.page).subscribe(response =>{
      this.list = response;
      this.maxPages = Math.ceil(response.count/response.results.length);
    }) 
  }

  public changePage(number: number){
    this.page = number;
    this.planetService.getPlanets(this.page).subscribe(response => this.list = response);
  }
  
  counter() {
    return new Array(this.maxPages);
  }
  
  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
