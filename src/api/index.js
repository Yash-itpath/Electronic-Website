// src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.in/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: interceptors
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default api;
