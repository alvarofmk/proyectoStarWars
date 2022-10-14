import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { IndexComponent } from './components/index/index.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'people', component: PeopleListComponent},
  {path: 'films', component: FilmListComponent},
  {path: 'species', component: SpeciesListComponent},
  {path: 'planets', component: PlanetListComponent},
  {path: 'starships', component: StarshipListComponent},
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'people/:id', component: PeopleDetailsComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
