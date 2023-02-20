import { api } from './api';

export async function listProductsByType(type_id: string) {
  const response = await api.get(`/products/${type_id}`);
  return response.data;
}

export async function listProducts(keyword: string) {
  const response = await api.get(`/products?keyword=${keyword}`);
  return response.data;
}

export async function listBestSellers() {
  const response = await api.get('/products');
  return response.data;
}