import { api, createHeaders } from './api';

interface paymentProps {
  value: number,
  issuer: string;
  number: string;
  name: string;
  expirationDate: string;
  cvc: string;
}

export async function makePayment(body: paymentProps) {
  const config = createHeaders();
  const response = await api.post('/payments', body, config);
  return response.data;
}
