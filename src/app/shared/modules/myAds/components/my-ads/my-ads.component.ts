import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'src/app/auth/store/auth.selector';
import { AdService } from 'src/app/shared/services/ads.service';
import { AdInterface } from 'src/app/shared/types/ad.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {
  yourAds: AdInterface[] = []
  user!: UserInterface
  ads: AdInterface[] = []

  constructor(private adService: AdService, private store: Store) { }

  ngOnInit() {
    this.adService.getAds().subscribe((ads: AdInterface[]) => {
      this.ads = ads;
      this.store.pipe(select(selectUser)).subscribe((user: UserInterface | null) => {
        if (user !== null) {
          user.ads.forEach((userAd: string) => {
            ads.forEach((ad: AdInterface) => {
              if (ad.id === userAd) {
                this.yourAds?.push(ad)
              }
            })
          })
        }
      });
    })
  }
}
