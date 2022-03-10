import store from '../store';
import {logoutAction} from '../store/StoreActions';
import Http from './Http';

Http.interceptors.request.use(config => {
  const {accessToken} = store.getState().global.authUser || {};

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
Http.interceptors.response.use(undefined, error => {
  if (error.response.status === 401) {
    store.dispatch(logoutAction());
  }
  return Promise.reject(error);
});