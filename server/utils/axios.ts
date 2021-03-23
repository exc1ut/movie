import axios from "axios";

export default axios.create({
  baseURL: "https://api.new.mediabox.uz/v2",
  headers: {
    "Content-Type": "application/hal+json; charset=UTF-8",
    "Accesss-Control-Allow-Credentials": true,
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Access-Control-Allow-Origin": "*",
  },
});
