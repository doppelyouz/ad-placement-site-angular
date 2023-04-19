import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserInterface} from 'src/app/shared/types/user.interface';
import { url } from 'src/url';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) {}

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${url}/users`);
  }
  getUsersById(id: string | number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${url}/users/${id}`);
  }
}
