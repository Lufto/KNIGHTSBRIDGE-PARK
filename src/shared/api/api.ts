import axios, { AxiosInstance } from 'axios'

const apiBasePath = process.env.API_BASE_PATH;

const api: AxiosInstance = axios.create({
  baseURL: apiBasePath,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers['Header'] = 'SomeCustomValue';
    
    console.log('Request sent to: ', config.url);
    console.log('Request headers: ', config.headers);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;