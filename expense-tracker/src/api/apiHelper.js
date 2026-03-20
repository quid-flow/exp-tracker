import axios from "axios";

console.log(import.meta.env.VITE_API_BASE_URL);
const apiHelper = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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
  (error) => Promise.reject(error)
);

// 🔥 RESPONSE INTERCEPTOR (VERY IMPORTANT)
apiHelper.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);

    if (error.response?.status === 401) {
      // token expired
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error.response?.data || error.message);
  }
);

export default apiHelper;