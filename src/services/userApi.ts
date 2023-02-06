import { api } from './api';

interface Props{
  name: string
  email: string
  password: string
}

export async function signUp({ name, email, password } : Props) {
  const response = await api.post('/users', { name, email, password });
  return response.data;
}