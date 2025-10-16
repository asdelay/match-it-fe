import axios from "axios";

export const getAllCandidates = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/user`);
};
