import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
});

export const setToken = (token: string) => {
  api.defaults.headers.common.Authorization = token;
};

export const requestGet = async (endpoint: string) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestPost = async (endpoint: string, body: object) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export default api;
