import { axiosInstance } from "@/api/axiosInstace";
import { type FormValues } from "@/pages/auth/components/form";
import axios from "axios";
import { toast } from "sonner";
export const loginUser = (credentials: {email: string, password: string}) => {
    const userData = axiosInstance.post(`/auth/login`, credentials)
    return userData;
}

export const registerUser = (credentials: {fullName: string, email: string, password: string}) => {
    const userData = axiosInstance.post(`/auth/register`, credentials)
    return userData;
}

export const updateUser = ({data, id}: {data: FormValues, id: number}) => {
    const formData = new FormData()
    formData.append('jobTitle', data.jobTitle)
    formData.append('cv', data.cv)
    formData.append('phoneNumber', data.phoneNumber)
    const userData = axiosInstance.patch(`/user/${id}`, formData)
    return userData;
}

export const passwordResetVerify = (email: string) => {
    const response = axiosInstance.post('/auth/passwordReset', { email })
    toast.success('If this email is registered, you’ll receive a password reset link shortly.')
    return response
}

export const changePasswords = (credentials: {newPassword: string, tid: string, token: string}) => {
    const response = axios.post(`${import.meta.env.VITE_BASE_URL}/auth/set-new-password`, credentials)
    return response
}