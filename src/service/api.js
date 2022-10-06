import Axios from "axios";

const api = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: process.env.REACT_APP_API_KEY,
  },
});

export default api;
