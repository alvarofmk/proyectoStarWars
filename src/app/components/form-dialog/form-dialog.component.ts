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
  characterForm = new FormGroup({
    name: new FormControl(this.data.person.name,Validators.required),
    height: new FormControl(this.data.person.height,Validators.required),
    mass: new FormControl(this.data.person.height,Validators.required),
    hair_color: new FormControl(this.data.person.hair_color,Validators.required),
    skin_color: new FormControl(this.data.person.skin_color,Validators.required),
    eye_color: new FormControl(this.data.person.eye_color,Validators.required),
    birth_year: new FormControl(this.data.person.birth_year,Validators.required),
    gender: new FormControl(this.data.person.gender,Validators.required),
    homeworld: new FormControl(this.data.person.homeworld,Validators.required),
    created: new FormControl(this.data.person.created,Validators.required),
    edited: new FormControl(this.data.person.edited,Validators.required),
    url: new FormControl(this.data.person.url,Validators.required),
  })

  constructor(public dialogRef: MatDialogRef<FormDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  onSubmit(){
  }

}
