import axios from "axios";

const Instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com"
});

Instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN From Instance";

// Instance.interceptors.request.use();
// Instance.interceptors.response.use();

export default Instance;
