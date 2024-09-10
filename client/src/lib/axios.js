import axios from "axios";

/* const authUser = localStorage.getItem("user") || null;
console.log(authUser); */

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
});

export default axiosInstance;
