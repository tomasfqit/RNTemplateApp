import { useState } from 'react';
import { useAuthStore } from '../../../store/auth.store';

export interface IFormLogin {
    email: string
    password: string
}

export interface ILoginUIHook {
    form: IFormLogin;
    handleChangeForm: (key: keyof IFormLogin, value: string) => void;
    handleLogin: () => void;
}

export const useLoginUIHook = (): ILoginUIHook => {
  const { login } = useAuthStore();
  const [form, setForm] = useState<IFormLogin>({ email: '', password: '' });

  const handleChangeForm = (key: keyof IFormLogin, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleLogin = () => {
    console.log('login', form);
    login(form.email, { id: '1', name: 'John Doe', email: form.email });
  };

  return {
    form,
    handleChangeForm,
    handleLogin,
  };
};
