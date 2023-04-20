import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/components/register/register.component';
import { LoginComponent } from './auth/components/login/login.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NewAdComponent } from './shared/modules/new-ad/components/new-ad/new-ad.component';
import { AuthGuard } from './core/guards/auth.guard';
import { MainComponent } from './shared/modules/main/components/main/main.component';
import { ProfileComponent } from './shared/modules/profile/components/profile/profile.component';
import { SettingsComponent } from './shared/modules/settings/components/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'new',
    component: NewAdComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
