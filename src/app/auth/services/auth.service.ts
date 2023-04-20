import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { UserService } from '../../shared/services/users.service';
import { UserInterface } from 'src/app/shared/types/user.interface';
import {LoginRequestInterface} from '../types/loginRequest.interface'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import { url } from 'src/url';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private http: HttpClient, private persistance: PersistanceService, private userService: UserService) {}

  login(loginRequest: LoginRequestInterface): Observable<UserInterface> {
    return this.userService.getUsers().pipe(
      map((users) => {
        const user: UserInterface | undefined = users.find((u) => u.email === loginRequest.email && u.password === loginRequest.password);
        if (user) {
          this.persistance.set('user', user)
          return user;
        } else {
          throw new Error('Invalid email or password');
        }
      })
    );
  }

  register(registerRequest: RegisterRequestInterface): Observable<UserInterface[]> {
    const user: UserInterface = {
      ...registerRequest!,
      ads: [],
      favorites: [],
      id: `user-${Date.now()}`,
      avatar: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg'
    };
    return this.http.post<UserInterface[]>(`${url}/users`, user);
  }

  updateUser(user: UserInterface): Observable<UserInterface> {
    return this.http.put<UserInterface>(`${url}/users/${user.id}`, user);
  }
}
