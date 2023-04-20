import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as AuthActions from '../actions/auth.actions';
import { UserInterface } from 'src/app/shared/types/user.interface'
import { AuthService } from '../../services/auth.service';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

@Injectable()
export class AuthEffects {
  userService: any;
  constructor(private actions$: Actions, private authService: AuthService, private persistance: PersistanceService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ loginRequest }) =>
        this.authService.login(loginRequest).pipe(
          map((user: UserInterface) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error: 'Something went wrong login$'  })))
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ registerRequest }) =>
        this.authService.register(registerRequest).pipe(
          map(() => AuthActions.registerSuccess()),
          catchError((error) => of(AuthActions.registerFailure({ error: 'Something went wrong register$'  })))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logOut),
      tap(() => {
        localStorage.removeItem('user')
      })
    ),
    { dispatch: false }
  );

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.updateUser),
      switchMap(({user}) =>
        this.authService.updateUser(user).pipe(
          map(() => {
            this.persistance.set('user', user)
            return AuthActions.updateUserSuccess({ user })
          }),
          catchError((error) => of(AuthActions.updateUserFailure({ error: 'Something went wrong updateUser$' })))
        )
      )
    )
  );
}
