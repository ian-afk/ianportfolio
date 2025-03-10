import axios from "axios";
const BASE_API_URL = "http://localhost:8000";

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
