import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Specie } from 'src/app/interfaces/specie.interface';
import { SpecieService } from 'src/app/services/specie.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {

  id: number = 0;
  species: Specie = {} as Specie;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/species/"

  constructor(private route: ActivatedRoute, private speciesService: SpecieService) { }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => this.id = parametros['id']);
    this.speciesService.getSingleSpecies(this.id).subscribe(response => this.species = response);
  }

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

}
