import type { SafeUser } from '@/types';
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: SafeUser | null;
  setAuth: (token: string, user: SafeUser) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setAuth: (token, user) => set({ token, user }),
  clearAuth: () => set({ token: null, user: null }),
}))