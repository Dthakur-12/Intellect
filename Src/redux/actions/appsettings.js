// import { FORGOT_PASSWORD, LOGIN_API, SIGNUP_API } from '../../config/urls';
// import { apiPost, clearUserData, setUserData } from '../../utils/utils';
import { saveUserData } from '../reducers/auth';
import store from '../store';
const { dispatch } = store;
import { changeLang } from '../reducers/appsettings';

export const ChangeLanguage = (data) => {
  dispatch(changeLang(data)); //saveUserData is a function which is define in reducer state
};

export const ChangeTheme = (data) => {
    dispatch(ChangeTheme(data)); //saveUserData is a function which is define in reducer state
  };


// export function logout() {
//   dispatch({ type: types.CLEAR_REDUX_STATE });
// //   clearUserData();
