import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/interfaces/people.interface';
import { Planet } from 'src/app/interfaces/planet.interface';
import { Specie } from 'src/app/interfaces/specie.interface';
import { CharacterService } from 'src/app/services/character.service';
import { PlanetService } from 'src/app/services/planet.service';
import { SpecieService } from 'src/app/services/specie.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  id: number = 0;
  person: Person = {} as Person;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/characters/"
  planet: Planet = {} as Planet;
  species: Specie[] = [];

  constructor(private route: ActivatedRoute, private characterService: CharacterService, private speciesService: SpecieService, private planetService: PlanetService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => this.id = parametros['id']);
    this.characterService.getCharacter(this.id).subscribe(response => {
      this.person = response;
      this.planetService.getByUrl(response.homeworld).subscribe(planetResponse => this.planet = planetResponse);
      response.species.forEach(speciesResponse => {
        this.speciesService.getByUrl(speciesResponse).subscribe(speciesDetail => this.species.push(speciesDetail));
      })
    });
    
  }

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
