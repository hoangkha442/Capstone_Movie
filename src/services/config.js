import axios from "axios";
import { localSevice } from "./LocalStoreService";
import { batLoading, tatLoading } from "../redux/spinnerSlice";
import { store } from "..";

export const https = axios.create(
    {
        baseURL: 'https://movienew.cybersoft.edu.vn',
        headers:{
            tokenCybersoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OCIsIkhldEhhblN0cmluZyI6IjIwLzA3LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1Mjk2OTYwMDAwMCIsIm5iZiI6MTcyNjA3NDAwMCwiZXhwIjoxNzUzMTE3MjAwfQ.Qh5EKISAVqlhbNkgh1gtzDLUv1TXC7WpqNdNpAS2274',
            Authorization: "Bearer " + localSevice.get()?.accessToken,
        }
    }
)
// Add a request interceptor
https.interceptors.request.use(function (config) {
    // Do something before request is sent
    store.dispatch(batLoading())
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
https.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(tatLoading())
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(tatLoading())
    return Promise.reject(error);
  });