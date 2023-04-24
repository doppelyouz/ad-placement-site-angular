import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdService } from 'src/app/shared/services/ads.service';
import { UserService } from 'src/app/shared/services/users.service';
import { AdInterface } from 'src/app/shared/types/ad.interface';
import { UserInterface } from 'src/app/shared/types/user.interface';

@Component({
  selector: 'app-his-ads',
  templateUrl: './his-ads.component.html',
  styleUrls: ['./his-ads.component.scss']
})
export class HisAdsComponent {
  hisAds: AdInterface[] = []
  user!: UserInterface
  ads: AdInterface[] = []

  constructor(private adService: AdService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.adService.getAds().subscribe((ads: AdInterface[]) => {
      this.ads = ads;
      this.route.params.subscribe(params => {
      this.userService.getUsersById(params['id']).subscribe((user: UserInterface | null) => {
        if (user !== null) {
          user.ads.forEach((userAd: string) => {
            ads.forEach((ad: AdInterface) => {
              if (ad.id === userAd) {
                this.hisAds.push(ad)
              }
            })
          })
        }
      });
    })
  });
  }
}
