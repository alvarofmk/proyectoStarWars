import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/interfaces/film.interface';
import { FilmService } from 'src/app/services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  id: number = 0;
  film: Film = {} as Film;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/films/"

  constructor(private route: ActivatedRoute, private filmService: FilmService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => this.id = parametros['id']);
    this.filmService.getFilm(this.id).subscribe(response => this.film = response);
  }

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
