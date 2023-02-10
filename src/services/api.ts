import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, 
});

export function createHeaders() {
  const auth = JSON.parse(localStorage.getItem('plantshop') || '');
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  };
  return config;
}