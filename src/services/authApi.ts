import { api, createHeaders } from './api';

interface Props{
  email: string
  password: string
}

export async function signIn({ email, password } : Props) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}

export async function authSignIn(email: string) {
  const response = await api.post('/auth/auth-sign-in', { email });
  return response.data;
}

export async function signOut() {
  const config = createHeaders();
  const response = await api.delete('/auth/sign-out', config);
  return response.data;
}