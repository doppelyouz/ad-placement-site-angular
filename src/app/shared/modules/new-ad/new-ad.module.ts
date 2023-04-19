import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdComponent } from './components/new-ad/new-ad.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'new',
    component: NewAdComponent
  }
]

@NgModule({
  declarations: [
    NewAdComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class NewAdModule { }
