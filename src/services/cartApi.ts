import { api, createHeaders } from './api';

interface cartProps {
  product_id: string,
  amount: number
}

export async function getCartProducts() {
  const config = createHeaders();
  const response = await api.get('/carts', config);
  return response.data;
}

export async function addToCart(body: cartProps) {
  const config = createHeaders();
  const response = await api.post('/carts', body, config);
  return response.data;
}
