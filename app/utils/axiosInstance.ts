import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: process.env.BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const errorMessage = error.response.data.detail;
    const accessTokenError = 'Authentication credentials were not provided.';
    const noTokensError = 'No valid refresh token found.';

    console.log(errorMessage);

    if (error.response.status === 401 && errorMessage === accessTokenError) {
      try {
        await axiosInstance.post('/api/users/token/refresh/');
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
