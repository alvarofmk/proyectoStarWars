import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmListComponent } from './components/film-list/film-list.component';
import { IndexComponent } from './components/index/index.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    IndexComponent,
    PeopleListComponent,
    PlanetListComponent,
    SpeciesListComponent,
    StarshipListComponent,
    VehicleListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
