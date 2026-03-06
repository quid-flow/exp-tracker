import axios from "axios";

const apiHelper = axios.create({
  baseURL: "https://exp-tracker-eq6y.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

apiHelper.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiHelper;