import { api } from './api';

export async function listProductsByType(type_id: string) {
  const response = await api.get(`/products/${type_id}`);
  return response.data;
}