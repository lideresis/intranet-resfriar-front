import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { LOCAL_STORAGE_KEYS } from '../localstorage/localstorageKeys';
import { User } from '../models/User';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'Nenhum-endpoint-configurado-no-arquivo-.env',
  validateStatus: (status) => [400, 401, 403, 404, 409, 422, 200, 201, 204, 304].includes(status)
});

axiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    let user: User | null = null;
    try {
      let userStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.user);
      user = JSON.parse(String(userStorage)) as User;
      console.log('user axios', user);
    } catch (e) {
      console.log('Sem autorização', e);
    }
    if (user && config.headers) {
      config.headers.Authorization = 'apiToken ' + user.id + '###' + user.session_token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.status === 401 && window.location.pathname != '/login') {
      window.location.href = '/login';
    } else {
      return Promise.resolve(response);
    }
  },
  async (error) => {
    if (error.status === undefined) {
    } else {
      console.log('API ERROR', error);
    }
  }
);

export default axiosInstance;
