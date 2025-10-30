import { useAuthStore } from "@/store/useAuthStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteAccount, logout } from "@/pages/candidate/api";
import { useNavigate } from "react-router";
import type { AxiosError } from "axios";

export const useMutations = () => {
    const navigate = useNavigate();
    const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      toast.success("You have successfully log out");
      useAuthStore.getState().clearAuth();
      navigate("/");
    },
    onError: (e: AxiosError<{ message: string }>) => {
      toast.error(`Error! ${e?.response?.data.message || e.message}`);
      navigate('/candidate/account')
    },
  });

  const deleteAccountMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      toast.success("You have successfully deleted your account");
      useAuthStore.getState().clearAuth();
      navigate("/");
    },
    onError: (e: AxiosError<{ message: string }>) => {
      toast.error(`Error! ${e?.response?.data.message || e.message}`);
      navigate('/candidate/account')
    },
  });
  return {logoutMutation, deleteAccountMutation}
}