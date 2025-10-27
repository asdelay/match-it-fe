import { axiosInstance } from "@/api/axiosInstace"
import type { FullUser } from "@/types"

export const getUser = (id: number): Promise<{ data: FullUser }> => {
    console.log('id', id)
    const user = axiosInstance.get(`/user/${id}`)

    return user
}