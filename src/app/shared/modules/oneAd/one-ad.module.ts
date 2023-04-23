import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneAdComponent } from './components/one-ad/one-ad.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OneAdComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class OneAdModule { }
