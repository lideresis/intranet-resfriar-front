import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { LOCAL_STORAGE_KEYS } from '../localstorage/localstorageKeys';
import { User } from '../models/User';

const createAxiosInstance = async () => {
  const endpoint = process.env.REACT_APP_API_URL;

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: endpoint || process.env.REACT_APP_API_URL,
    validateStatus: (status: number) => [400, 401, 403, 404, 409, 422, 200, 201, 204, 304].includes(status)
  });

  axiosInstance.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      let user: User | null = null;
      let apiToken: string | null = null;

      try {
        let userStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.USER);
        user = JSON.parse(String(userStorage)) as User;
      } catch (e) {
        console.log('Sem autorização', e);
      }

      if (user && apiToken && config) {
        config.headers['X-token'] = user.token;
        config.headers['X-Usuario'] = user.token;
        config.headers['X-empresa'] = user.empresa.api_token;
      }

      return config;
    },
    (error: any) => {
      console.log('error', error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(async (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  });

  return axiosInstance;
};

export default createAxiosInstance;
