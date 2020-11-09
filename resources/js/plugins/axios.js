import axios from 'axios';

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  ({ data }) => data,
  error => {
    // config

    return Promise.reject(error);
  }
);
