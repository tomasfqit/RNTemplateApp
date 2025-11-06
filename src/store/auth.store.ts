import { create } from 'zustand';

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthStore {
  token?: string;
  user?: User;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>(set => ({
  token: undefined,
  user: undefined,
  login: (token: string, user: User) => set({ token, user }),
  logout: () => set({ token: undefined, user: undefined }),
}));
