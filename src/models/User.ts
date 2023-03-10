import { Empresa } from './Empresa';

export interface User {
  id?: number;
  username: string;
  email?: string;
  password?: string;
  password_confirmation?: string;
  token: string;
  is_active?: boolean;

  empresa_id: number;
  empresa: Empresa;
}

export interface UserForm {
  email: string;
  password?: string;
  password_confirmation?: string;
}
