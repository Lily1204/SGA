/**
 * Reducer para los datos de usuario
 * */

/**
 * Tipos de datos
 * */
import {UserData} from '../models/user-data.interface';

/**
 * Acciones que se realizan con los datos del usuario
 * */
import * as AuthenticationActions from '../actions/authentication.actions';

/**
 * Reducer
 * */
export function authenticationReducer(state: UserData, action: AuthenticationActions.All) {
  switch (action.type) {
    case AuthenticationActions.LOGIN:
      return action.payload;
    case AuthenticationActions.LOGOUT:
      return null;
    default:
      return state;
  }
}
