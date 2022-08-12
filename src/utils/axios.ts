import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL
const axiosInstance = axios.create({ baseURL: apiUrl })
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) =>
        Promise.reject(
            (error.response && error.response.data) || 'There is an error!'
        )
);
export default axiosInstance
