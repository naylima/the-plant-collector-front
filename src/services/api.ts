import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:4000/', 
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