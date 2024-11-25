import axios from "axios";

const apiCliente = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiCliente;
