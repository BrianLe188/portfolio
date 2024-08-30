import axios from "axios";

const backendInstance = axios.create({
  baseURL: "http://localhost:5328/api",
});

backendInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    throw error;
  },
);

export default backendInstance;
