import { AxiosResponse } from 'axios';
import axiosInstance from '../middlewares/axios.interceptors';
import { User } from '../models/User';

let showReponsesInConsole = process.env.REACT_APP_SHOW_RESPONSES_IN_CONSOLE;

const loginUrl = '/auth/login';
const signUpUrl = '/auth/sign-up';
const accountConfirmation = '/auth/user-register-activate';
const requestPasswordChange = '/auth/forgot-password';
const changePassword = '/auth/forgot-password';

export const AuthService = {
  doLogin: async (data: User) => {
    let response: AxiosResponse | undefined;
    try {
      return (response = await axiosInstance.post(loginUrl, data));
    } catch (err) {
      console.log('Error in AuthService.doLogin', err);
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.doLogin', response);
      }
    }
  },

  register: async (data: User) => {
    let response: AxiosResponse | undefined;
    try {
      return (response = await axiosInstance.post(signUpUrl, data));
    } catch (err) {
      console.log('Error in AuthService.register', err);
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.register', response);
      }
    }
  },

  accountConfirmation: async (token: string) => {
    let response: AxiosResponse | undefined;
    try {
      return await axiosInstance.get(`${accountConfirmation}/${token}`);
    } catch (err) {
      console.log('Error in AuthService.accountConfirmation', err);
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.accountConfirmation', response);
      }
    }
  },

  requestPasswordChange: async (email: string) => {
    let response: AxiosResponse | undefined;
    try {
      return (response = await axiosInstance.post(requestPasswordChange, { email }));
    } catch (err) {
      console.log('Error in AuthService.requestPasswordChange', err);
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.requestPasswordChange', response);
      }
    }
  },

  changePasswordValidateToken: async (token: string) => {
    let response: AxiosResponse | undefined;
    try {
      return (response = await axiosInstance.get(`${changePassword}/${token}`));
    } catch (err) {
      console.log('Error in AuthService.changePasswordValidateToken', err);
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.changePasswordValidateToken', response);
      }
    }
  },

  changePassword: async (token: string, data: { password: string; password_confirmation: string }) => {
    let response: AxiosResponse | undefined;
    try {
      return (response = await axiosInstance.post(`${changePassword}/${token}`, data));
    } catch (err) {
      console.log('Error in AuthService.changePassword', err);
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.changePassword', response);
      }
    }
  }
};
