import axios from "axios";
import { useAuthStore } from '../store/useAuthStore';
import { toast } from "sonner";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true
})

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401) {
      try {
        const refreshResponse = await axios.post(
          `${import.meta.env.VITE_BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        const newToken = refreshResponse.data.accessToken;
        const user = refreshResponse.data.user;

        useAuthStore.getState().setAuth(newToken, user);

        error.config.headers.Authorization = `Bearer ${newToken}`;
        return axiosInstance(error.config);
      } catch {
        useAuthStore.getState().clearAuth();
        toast.error('Your session expired')
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

