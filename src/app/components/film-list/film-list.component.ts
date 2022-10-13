import { Component, OnInit } from '@angular/core';
import { FilmResponse } from 'src/app/interfaces/film.interface';
import { PeopleResponse } from 'src/app/interfaces/people.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  list: FilmResponse = {} as FilmResponse;
  page: number = 1;
  maxPages: number = 0;
  imgUrlBase: string ="https://starwars-visualguide.com/assets/img/films/";

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.filmService.getFilms(this.page).subscribe(response=>{
      this.list = response;
      this.maxPages = Math.ceil(response.count/response.results.length)
    })
  }

  public changePage(number: number){
    this.page = number;
    this.filmService.getFilms(this.page).subscribe(response => this.list = response);
  }

  counter() {
    return new Array(this.maxPages);
  }
  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }
}
