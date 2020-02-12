import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
axios.defaults.headers.common["DEFAULT_CUSTOM_COMMON_HEADER"] = "AUTH_TOKEN";
axios.defaults.headers.post["DEFAULT_CUSTOM_COMMON_HEADER_FOR_POST_REQ"] =
  "JWT_TOKEN";

axios.interceptors.request.use(
  request => {
    console.log("[REQUEST]", request);
    console.log("[REQUEST.HEADERS]", request.headers.common);
    const headers = {
      ...request.headers.common,
      "X-customHeader": "customHeader1"
    };
    console.log("++ ", headers);
    request.headers.common = headers;
    console.log("POST EDIT ", request);
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// Removing Interceptors
// var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
