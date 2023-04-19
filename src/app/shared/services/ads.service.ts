import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { url } from 'src/url';
import { AdInterface } from '../types/ad.interface';
import { AdRequestInterface } from '../types/adRequest.interface';
import { Store, select } from '@ngrx/store';
import { UserInterface } from '../types/user.interface';
import { selectUser } from 'src/app/auth/store/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AdService {
  constructor(private http: HttpClient) { }

  getAds(): Observable<AdInterface[]> {
    return this.http.get<AdInterface[]>(`${url}/ads`);
  }

  getAdById(id: string): Observable<AdInterface> {
    return this.http.get<AdInterface>(`${url}/ads/${id}`);
  }

  deleteAd(id: string) {
    return this.http.delete<AdInterface>(`${url}/ads/${id}`);
  }

  updateAd(id: string, ad: AdInterface) {
    return this.http.put<AdInterface>(`${url}/ads/${id}`, ad);
  }

  createAd(userId: string, adRequest: AdRequestInterface): Observable<AdInterface> {
    const ad: AdInterface = {
      ...adRequest,
      comments: [],
      date: new Date().toLocaleDateString(),
      userId,
      id: `ad-${Date.now()}`
    };

    return this.http.post<AdInterface>(`${url}/ads`, ad);
  }
}
