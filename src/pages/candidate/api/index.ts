import axios from "axios";

export const createUser = async (data: any) => {
  const formData = new FormData();

  // append all text fields
  formData.append("fullName", data.fullName);
  formData.append("email", data.email);
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("jobTitle", data.jobTitle);

  // append the file (this is your blob)
  formData.append("cv", data.cv);

  const res = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/user`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return res.data;
};
