import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileModule { }
