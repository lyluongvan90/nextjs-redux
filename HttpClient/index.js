import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_BASEURL || "http://localhost:3000",
  timeout: 10000,
});

export default httpClient;
