import { useState } from 'react';

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
  const [form, setForm] = useState<IFormLogin>({ email: '', password: '' });

  const handleChangeForm = (key: keyof IFormLogin, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleLogin = () => {
    console.log('login', form);
  };

  return {
    form,
    handleChangeForm,
    handleLogin,
  };
};
