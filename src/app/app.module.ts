import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { PersistanceService } from './shared/services/persistance.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './shared/services/users.service';
import { RouterModule } from '@angular/router';
import { NewAdModule } from './shared/modules/new-ad/new-ad.module';
import { TopbarComponent } from './core/components/topbar/topbar.component';
import { AdService } from './shared/services/ads.service';
import { MainModule } from './shared/modules/main/main.module';
import { ProfileModule } from './shared/modules/profile/profile.module';
import { SettingsModule } from './shared/modules/settings/settings.module';
import { OneAdModule } from './shared/modules/oneAd/one-ad.module';
import { FavoritesModule } from './shared/modules/favorites/favorites.module';
import { MyAdsModule } from './shared/modules/myAds/my-ads.module';
import { UserModule } from './shared/modules/user/user.module';
import { HisAdsModule } from './shared/modules/his-ads/his-ads.module';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent
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
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    NewAdModule,
    MainModule,
    ProfileModule,
    SettingsModule,
    OneAdModule,
    FavoritesModule,
    MyAdsModule,
    UserModule,
    HisAdsModule
  ],
  providers: [PersistanceService, UserService, AdService],
  bootstrap: [AppComponent]
})

export class AppModule {}
