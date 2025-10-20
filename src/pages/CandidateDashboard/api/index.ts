import axios from "axios"

export const getUser = (id: number) => {
    console.log('id', id)
    const user = axios.get(`${import.meta.env.VITE_BASE_URL}/user/${id}`)

    return user
}