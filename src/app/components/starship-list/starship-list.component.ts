import { Component, OnInit } from '@angular/core';
import { StarshipResponse } from 'src/app/interfaces/starship.interface';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  
  list: StarshipResponse = {} as StarshipResponse;
  page: number = 1;
  maxPages: number = 0;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/starships/"
  
  constructor(private starshipService: StarshipService) { }
  
  ngOnInit(): void {
    this.starshipService.getShips(this.page).subscribe(response =>{
      this.list = response;
      this.maxPages = Math.ceil(response.count/response.results.length);
    }) 
  }
  
  public changePage(number: number){
    this.page = number;
    this.starshipService.getShips(this.page).subscribe(response => this.list = response);
  }
  
  counter() {
    return new Array(this.maxPages);
  }
  
  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }
}
