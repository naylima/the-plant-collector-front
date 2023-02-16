import styled from 'styled-components';

import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Product } from '../components/Products/Product';

import { listProductsByType } from '../services/productsApi';
interface Product {
  id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number
}

export function Products () {
  const params = useParams();
  const type_id = params.type_id;

  const { name } =  useLocation().state;

  const [data, setData] = useState<Product[]>([]);

  if (type_id) {
    useEffect(() => {
      const promise = listProductsByType(type_id);
      promise.then((res => {
        setData(res);
      })).catch(()=>{
        alert('An error occurred while trying to fetch the data, please refresh the page');
      });
    }, [type_id]);
  }

  return (
    <>
      <H1>{name}</H1>
      {
        data.length === 0 ?
          <H2>Coming soon.</H2>
          :
          <Container>
            {
              data.map(product => (
                <Product 
                  key={product.id}
                  product={product}
                />
              ))
            }
          </Container>
      }
    </>
  );
}

const H1 = styled.h1`
  margin-top: 35px;
  text-align: center;
  font-size: 2em;
  line-height: 2em;
  font-weight: 500;
  color: #FF724C;
`;

const H2 = styled.h2`
  text-align: center;
  font-size: 18px;
  color: #FF724C;
`;

const Container = styled.div`
  width: 95%;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;