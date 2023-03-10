import { AxiosResponse } from 'axios';
import { default as createAxiosInstance } from '../middlewares/axios.interceptors';
import { UserForm } from '../models/User';

let showReponsesInConsole = process.env.REACT_APP_SHOW_RESPONSES_IN_CONSOLE;

const loginUrl = '/auth/login';
const signUpUrl = '/auth/cadastro';
const accountConfirmation = '/auth/user-register-activate';
const requestPasswordChange = '/auth/forgot-password';
const changePassword = '/auth/forgot-password';
const validateCpf = '/auth/verificacao-cpf';

export const AuthService = {
  doLogin: async (data: { usuario: string; senha: string }) => {
    const axiosInstance = await createAxiosInstance();
    let response: AxiosResponse | undefined;

    try {
      return (response = await axiosInstance.post(loginUrl, data));
    } catch (err) {
      console.log('Error in AuthService.doLogin', err);
      return err as AxiosResponse;
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.doLogin', response);
      }
    }
  },

  signUp: async (data: UserForm) => {
    const axiosInstance = await createAxiosInstance();
    let response: AxiosResponse | undefined;

    try {
      return (response = await axiosInstance.post(signUpUrl, data));
    } catch (err) {
      console.log('Error in AuthService.signUp', err);
      return err as AxiosResponse;
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.signUp', response);
      }
    }
  },

  accountConfirmation: async (token: string) => {
    const axiosInstance = await createAxiosInstance();
    let response: AxiosResponse | undefined;

    try {
      return await axiosInstance.get(`${accountConfirmation}/${token}`);
    } catch (err) {
      console.log('Error in AuthService.accountConfirmation', err);
      return err as AxiosResponse;
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.accountConfirmation', response);
      }
    }
  },

  requestPasswordChange: async (email: string) => {
    const axiosInstance = await createAxiosInstance();
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
    const axiosInstance = await createAxiosInstance();
    let response: AxiosResponse | undefined;

    try {
      return (response = await axiosInstance.get(`${changePassword}/${token}`));
    } catch (err) {
      console.log('Error in AuthService.changePasswordValidateToken', err);
      return err as AxiosResponse;
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.changePasswordValidateToken', response);
      }
    }
  },

  changePassword: async (token: string, data: { password: string; password_confirmation: string }) => {
    const axiosInstance = await createAxiosInstance();
    let response: AxiosResponse | undefined;

    try {
      return (response = await axiosInstance.post(`${changePassword}/${token}`, data));
    } catch (err) {
      console.log('Error in AuthService.changePassword', err);
      return err as AxiosResponse;
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.changePassword', response);
      }
    }
  },

  validateCpf: async (cpf: string) => {
    const axiosInstance = await createAxiosInstance();
    let response: AxiosResponse | undefined;

    try {
      return (response = await axiosInstance.get(validateCpf, {
        params: {
          cpf
        }
      }));
    } catch (err) {
      console.log('Error in AuthService.validateCpf', err);
      return err as AxiosResponse;
    } finally {
      if (showReponsesInConsole) {
        console.log('AuthService.validateCpf', response);
      }
    }
  }
};
