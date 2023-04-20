import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/shared/services/ads.service';
import { AdInterface } from 'src/app/shared/types/ad.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  searchTerm = ''
  selectedCategory = '';
  ads: AdInterface[] = [];
  categories: string[] = ['Services', 'Real estate', 'Electronics', 'Sport', 'Repair'];
  filteredAds: AdInterface[] = [];

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.adService.getAds().subscribe((ads: AdInterface[]) => {
      this.ads = ads;
      this.filteredAds = ads;
      this.categories = Array.from(new Set(ads.map((ad) => ad.category)));
    });
  }

  filterAds() {
    let filteredAds = this.ads;

    if (this.selectedCategory) {
      filteredAds = filteredAds.filter((ad) => ad.category === this.selectedCategory);
    }

    if (this.searchTerm) {
      filteredAds = this.ads.filter(ad => {
        return ad.title.toLowerCase().includes(this.searchTerm.toLowerCase())
        ||
        ad.text.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }

    this.filteredAds = filteredAds;
  }

  clearFilters() {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.filterAds();
  }
}
