/* eslint-disable no-console */
import * as ApiHelper from '../helpers/ApiHelper';

const request = requestToExecute => {
  return requestToExecute.catch(err => {
    handleRequestFailure(err);
  });
};

const handleUnauthorized = () => {
  // handle
};

const handleRequestFailure = error => {
  const { response } = error;
  if (response && response.status === 401) {
    console.log('unauthorized');
    handleUnauthorized();
    throw response.status;
  } else if (response && response.data) {
    throw response.data;
  } else {
    throw new Error(error);
  }
};

export const get = (url, config = {}) => request(ApiHelper.get(url, config));

export const post = (url, body, config) =>
  request(ApiHelper.post(url, body, config));

export const put = (url, body, config) =>
  request(ApiHelper.put(url, body, config));

export const patch = (url, body, config) =>
  request(ApiHelper.patch(url, body, config));

export const del = (url, body, config) =>
  request(ApiHelper.del(url, body, config));

export const putWithoutAuth = (url, body, config) =>
  request(ApiHelper.putWithoutAuth(url, body, config));
