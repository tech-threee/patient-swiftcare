import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://swiftcare-server.onrender.com/api/v1",
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = "/auth/patient";
    }
  }
);

export { axiosClient };
