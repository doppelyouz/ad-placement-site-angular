import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdComponent } from './components/new-ad/new-ad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewAdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class NewAdModule { }
