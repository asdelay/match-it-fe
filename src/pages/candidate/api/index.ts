import axios from "axios";

export const updateUser = async ({data, id}:{data: any, id: number}) => {
  console.log(`user id: `,id)
  const formData = new FormData();

  // append all text fields
  formData.append("phoneNumber", data.phoneNumber);
  formData.append("jobTitle", data.jobTitle);

  // append the file (this is your blob)
  formData.append("cv", data.cv);

  const res = await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/user/${id}`,
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );

  return res.data;
};
