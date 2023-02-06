import { api, createHeaders } from './api';

interface Enrollment {
  full_name: string
  cpf: string
  birthday: string
  phone: string
  address: {
    cep: string
    street: string
    number: string
    city: string
    state: string
    neighborhood: string
    addressDetail: string
  }
}

export async function getEnrollment() {
  const config = createHeaders();
  const response = await api.get('/enrollments', config);
  return response.data;
}

export async function postEnrollment(body: Enrollment) {
  const config = createHeaders();
  const response = await api.post('/enrollments', body, config);
  return response.data;
}
