import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    IndexComponent,
    PeopleListComponent,
    PlanetListComponent,
    SpeciesListComponent,
    StarshipListComponent,
    VehicleListComponent,
    PeopleDetailsComponent,
    PlanetDetailsComponent,
    SpeciesDetailsComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
