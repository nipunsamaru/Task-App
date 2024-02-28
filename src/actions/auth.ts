import {LOGIN_SUCCESS, LOGOUT} from './type';
import AuthService from '../services/AuthService';
export const login = (user: any) => (dispatch: any) => {
  return AuthService.logIn(user).then(
    (response: any) => {
      if (response.status === 'success') {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {user: response.user},
        });
        Promise.resolve();
        return response;
      }
    },
    error => {
      const message = error.toString();
      Promise.reject();
      return message;
    },
  );
};
export const logout = () => (dispatch: any) => {
  return AuthService.logOut().then(response => {
    if (response.status === 'success') {
      dispatch({
        type: LOGOUT,
      });
      Promise.resolve();
      return response;
    }
  });
};
