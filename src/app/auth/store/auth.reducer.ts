import { Action, createReducer, on } from '@ngrx/store';
import { UserInterface } from 'src/app/shared/types/user.interface'
import * as AuthActions from './actions/auth.actions';
import { PersistanceService } from 'src/app/shared/services/persistance.service';

const persistance = new PersistanceService()

export interface AuthState {
  user: UserInterface | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  user: persistance.get('user' || 'null'),
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, AuthActions.register, (state) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginSuccess, (state, {user}) => {
      console.log(user);
      return {
      ...state,
      user,
      loading: false,
      error: null,
  }}),
  on(AuthActions.loginFailure, AuthActions.registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(AuthActions.registerSuccess, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(AuthActions.logOut, (state) => ({
      ...state,
      user: null
    })),
    on(AuthActions.updateUser, (state) => ({ ...state, loading: true })),
    on(AuthActions.updateUserSuccess, (state, { user }) => ({ ...state, user, loading: false })),
    on(AuthActions.updateUserFailure, (state, { error }) => ({ ...state, error, loading: false }))
)

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action)
}
