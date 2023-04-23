import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/auth/store/auth.selector';
import { AdService } from 'src/app/shared/services/ads.service';
import { AdInterface } from 'src/app/shared/types/ad.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {
  favorites: AdInterface[] = []
  user!: UserInterface
  ads: AdInterface[] = []

  constructor(private adService: AdService, private store: Store) { }

  ngOnInit() {
    this.adService.getAds().subscribe((ads: AdInterface[]) => {
      this.ads = ads;
      this.store.pipe(select(selectUser)).subscribe((user: UserInterface | null) => {
        if (user !== null) {
          user.favorites.forEach((userAd: string) => {
            ads.forEach((ad: AdInterface) => {
              if (ad.id === userAd) {
                this.favorites.push(ad)
              }
            })
          })
        }
      });
    })
  }
}
