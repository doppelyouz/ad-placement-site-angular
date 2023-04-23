import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAdsComponent } from './components/my-ads/my-ads.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MyAdsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MyAdsModule { }
