import axios_, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from '~/components';
import { logOut } from './utilities';

export const baseURL = process.env.REACT_APP_BACKEND_URL || '';
// export const baseURL = 'http://192.168.18.98:7864';

export const axios = axios_.create({
  baseURL: baseURL,
});

const UserRequestInterceptor = async (config: AxiosRequestConfig) => {
  let token: any = await getToken();
  if (token) {
    token = JSON.parse(token);
    config.headers['X-Signature'] = token.signature;
    config.headers['X-Timestamp'] = token.expiry;
    config.headers['Content-Type'] = 'application/json';
  }else{
    await logOut()
    return false;
  }
  return config;
};

const UserResponseInterceptor = (response: AxiosResponse) => {
  return response;
};

const UserResponseErrorInterceptor = async (error: AxiosError) => {
  if (error.response?.status === 403) {
    await logOut();
  } else {
    throw error;
  }
};

axios.interceptors.request.use(UserRequestInterceptor);
axios.interceptors.response.use(
  UserResponseInterceptor,
  UserResponseErrorInterceptor
);
