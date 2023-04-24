import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HisAdsComponent } from './components/his-ads/his-ads.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HisAdsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HisAdsModule { }
