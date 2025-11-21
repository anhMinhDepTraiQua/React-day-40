import axios from "axios";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // hoặc API của bạn
});

export default http;
