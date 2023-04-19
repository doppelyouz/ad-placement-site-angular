import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/auth/store/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectUser = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.user
)
export const selectLoading = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.loading
)
export const selectError = createSelector(
  selectAuthState,
  (authState: AuthState) => authState.error
)
