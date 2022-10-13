import { Component, OnInit } from '@angular/core';
import { SpecieResponse } from 'src/app/interfaces/specie.interface';
import { SpecieService } from 'src/app/services/specie.service';

@Component({
  selector: 'app-species-list',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  
  list: SpecieResponse = {} as SpecieResponse;
  page: number = 1;
  maxPages: number = 0;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/species/"

  constructor(private specieService: SpecieService) { }

  ngOnInit(): void {
    this.specieService.getSpecies(this.page).subscribe(response =>{
      this.list = response;
      this.maxPages = Math.ceil(response.count/response.results.length);
    }) 
  }

  public changePage(number: number){
    this.page = number;
    this.specieService.getSpecies(this.page).subscribe(response => this.list = response);
  }

  counter() {
    return new Array(this.maxPages);
  }

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
