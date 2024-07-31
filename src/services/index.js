import axios from 'axios'

axios.defaults.withCredentials= true;
axios.defaults.baseURL='http://localhost:5000';

axios.interceptors.request.use(async (config) => {
    return config;
},(error) =>{
 // Do something with request error
 return Promise.reject(error);
});
/**@type {axios} */
export default axios;