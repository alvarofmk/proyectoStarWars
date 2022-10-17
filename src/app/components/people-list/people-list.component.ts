import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeopleResponse, Person } from 'src/app/interfaces/people.interface';
import { CharacterService } from 'src/app/services/character.service';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

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
  characterToEdit: Person = {} as Person;

  constructor(private characterService: CharacterService, public dialog: MatDialog) { }

  ngOnInit(): void {
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

  handleMissingImage($evento: ErrorEvent) {
    ($evento.target as HTMLImageElement).src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(FormDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openLoadedDialog(enterAnimationDuration: string, exitAnimationDuration: string, characterToEdit: Person): void {
    this.dialog.open(FormDialogComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        person: characterToEdit
      }
    });
  }

}
