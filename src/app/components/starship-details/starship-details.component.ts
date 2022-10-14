import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Starship } from 'src/app/interfaces/starship.interface';
import { StarshipService } from 'src/app/services/starship.service';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit {

  id: number = 0;
  starship: Starship = {} as Starship;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/starships/"

  constructor(private route: ActivatedRoute, private starshipService: StarshipService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => this.id = parametros['id']);
    this.starshipService.getShip(this.id).subscribe(response => this.starship = response);
  }

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
