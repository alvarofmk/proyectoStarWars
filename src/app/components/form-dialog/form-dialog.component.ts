import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person, Gender } from 'src/app/interfaces/people.interface';
import { PeopleListComponent } from '../people-list/people-list.component';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  genders: Gender[] = [Gender.Female,Gender.Male,Gender.NA];
  characterModel: Person = this.data.person;
  characterForm = new FormGroup({
    name: new FormControl(this.characterModel.name,Validators.required),
    height: new FormControl(this.characterModel.height,Validators.required),
    mass: new FormControl(this.characterModel.height,Validators.required),
    hair_color: new FormControl(this.characterModel.hair_color,Validators.required),
    skin_color: new FormControl(this.characterModel.skin_color,Validators.required),
    eye_color: new FormControl(this.characterModel.eye_color,Validators.required),
    birth_year: new FormControl(this.characterModel.birth_year,Validators.required),
    gender: new FormControl(this.characterModel.gender,Validators.required),
    homeworld: new FormControl(this.characterModel.homeworld,Validators.required),
    created: new FormControl(this.characterModel.created,Validators.required),
    edited: new FormControl(this.characterModel.edited,Validators.required),
    url: new FormControl(this.characterModel.url,Validators.required),
  })

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  onSubmit(){
    console.log(this.characterForm.value)
  }

}
