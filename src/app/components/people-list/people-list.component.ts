import { Component, OnInit } from '@angular/core';
import { PeopleResponse } from 'src/app/interfaces/people.interface';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  list: PeopleResponse = {} as PeopleResponse;
  page: number = 1;
  maxPages: number = 0;
  imgUrlBase: string = "https://starwars-visualguide.com/assets/img/characters/"

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    debugger;
    this.characterService.getCharacters(this.page).subscribe(response =>{
      this.list = response;
      this.maxPages = Math.ceil(response.count/response.results.length);
    }) 
  }

  public changePage(number: number){
    this.page = number;
    this.characterService.getCharacters(this.page).subscribe(response => this.list = response);
  }

  counter() {
    return new Array(this.maxPages);
  }

}
