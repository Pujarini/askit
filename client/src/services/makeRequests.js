import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true, // for cookies
});

console.log(api);

export function makeRequest(url, options) {
  return api(url, options)
    .then((response) => response.data)
    .catch((error) =>
      Promise.reject(error?.response?.data?.message || "error")
    );
}
