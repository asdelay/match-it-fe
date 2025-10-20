import axios from "axios"

export const loginUser = (credentials: {email: string, password: string}) => {
    const userData = axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, credentials)
    return userData;
}

export const registerUser = (credentials: {fullName: string, email: string, password: string}) => {
    const userData = axios.post(`${import.meta.env.VITE_BASE_URL}/auth/register`, credentials)
    return userData;
}