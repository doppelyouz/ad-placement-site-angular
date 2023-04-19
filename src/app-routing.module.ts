import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PageNotFoundComponent } from './app/shared/modules/page-not-found/components/page-not-found/page-not-found.component';

// const routes: Routes = [
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  imports: [RouterModule], //.forRoot(routes)
  exports: [RouterModule]
})
export class AppRoutingModule { }
