import {Action} from '@ngrx/store';

import {UserData} from '../models/user-data.interface';

export const LOGIN = '[Authentication] Login';

export const LOGOUT = '[Authentication] Logout';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: UserData) {
  }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export type All = Login | Logout;
