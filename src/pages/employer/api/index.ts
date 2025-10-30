import axios from "axios";

export const getAllCandidates = (page=1, limit=10, orderBy="jobTitle", sort="asc", search="") => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/user?page=${page}&limit=${limit}&orderBy=${orderBy}&sort=${sort}&search=${search}`);
};
