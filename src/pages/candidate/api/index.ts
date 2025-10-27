import type { FormValues } from "../account/formSchema"
import { axiosInstance } from "@/api/axiosInstace";
export const updateUser = ({data, id}: {data: FormValues, id: number}) => {
    const formData = new FormData()
    for (const [key, value] of Object.entries(data)) {
        if(value && value !== undefined) {
            formData.append(key, value);
        }
    }
    
    const userData = axiosInstance.patch(`/user/${id}`, formData)
    return userData;
}

export const logout = (id: number) => {
    const userData = axiosInstance.post(`/auth/logout/${id}`)
    return userData
}