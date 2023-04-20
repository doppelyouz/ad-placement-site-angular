import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
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
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [RegisterComponent, LoginComponent],
    providers: [
      AuthService
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        BrowserModule,
        HttpClientModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([AuthEffects]),
    ]
})
export class AuthModule {}
