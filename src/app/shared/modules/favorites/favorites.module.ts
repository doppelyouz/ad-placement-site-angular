import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FavoritesModule { }
