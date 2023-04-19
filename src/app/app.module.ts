import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { PersistanceService } from './shared/services/persistance.service';
import { AppRoutingModule } from 'src/app-routing.module';
import { TopbarModule } from './shared/modules/topbar/topbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/services/users.service';
import { RouterModule } from '@angular/router';
// import { PageNotFoundModule } from './shared/modules/page-not-found/page-not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
        maxAge: 25
    }),
    HttpClientModule,
    AppRoutingModule,
    TopbarModule,
    FormsModule,
    ReactiveFormsModule,
    // PageNotFoundModule,
    AuthModule
  ],
  providers: [PersistanceService, UserService],
  bootstrap: [AppComponent]
})

export class AppModule {}
