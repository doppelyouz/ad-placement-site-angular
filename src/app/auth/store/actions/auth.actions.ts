import { createAction, props } from '@ngrx/store';
import {UserInterface} from 'src/app/shared/types/user.interface'
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

export const login = createAction(
  '[Auth] Login',
  props<{ loginRequest: LoginRequestInterface }>()
);

export const loginSuccess = createAction('[Auth] Login Success', props<{ user: UserInterface }>());

export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

export const register = createAction(
  '[Auth] Register',
  props<{ registerRequest: RegisterRequestInterface }>()
);

export const registerSuccess = createAction('[Auth] Register Success');

export const registerFailure = createAction('[Auth] Register Failure', props<{ error: string }>());
