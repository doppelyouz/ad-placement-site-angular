import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { StoreModule } from "@ngrx/store";
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from "./services/auth.service";
import { EffectsModule } from "@ngrx/effects";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from "./store/effects/auth.effects";
import { reducers } from "./store/auth.reducer";

const routes: Routes = [
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
]

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    providers: [
      AuthService
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects]),
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AuthModule {}
