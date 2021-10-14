import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api" || "https://invoice-app-smoky.vercel.app/api",
});

export default api;
