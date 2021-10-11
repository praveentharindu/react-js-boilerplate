import axios from 'axios';

const token = '';

axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * get method
 * @param {*} url
 * @param {*} config
 */
export const get = (url, config) => axios.get(url, config);

/**
 * post method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const post = (url, body, config) => axios.post(url, body, config);

/**
 * put method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const put = (url, body, config) => axios.put(url, body, config);

/**
 * patch method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const patch = (url, body, config) => axios.patch(url, body, config);

/**
 * delete method
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
export const del = (url, body, config) => axios.delete(url, config, body);

/**
 * put method without Autherization header
 * @param {*} url
 * @param {*} body
 * @param {*} config
 */
const instance = axios.create();
export const putWithoutAuth = (url, body, config) =>
  instance.put(url, body, config);

delete instance.defaults.headers.common.Authorization;
