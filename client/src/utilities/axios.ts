import axios from "axios";
import config from "../config/config.json";

export const fetchClient = axios.create({
  baseURL: config.basURI,
  method: "get",
  headers: {
    "Content-Type": "application/json",
  },
});
