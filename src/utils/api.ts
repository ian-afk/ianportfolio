import axios from "axios";
const BASE_API_URL = `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}`;

type addNewsProp = {
  name: string;
  email: string;
  message: string;
};

const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});
export const sendEmail = async (body: addNewsProp) => {
  const res = await api.post(`/api/sendemail/`, body, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);
  return res.data;
};
