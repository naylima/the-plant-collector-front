import styled from 'styled-components';

import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Navbar } from '../components/Navbar/Navbar';
import { SubNavBar } from '../components/SubNavbar/SubNavbar';
import { Footer } from '../components/Footer/Footer';
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
      <Navbar />
      <SubNavBar />
      <Wrapper>
        <h1>{name}</h1>
        {
          data.length === 0 ?
            <h2>Coming soon.</h2>
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
        
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  min-height: 55vh;
  padding-top: 14vh;
  background: #DBF2B9;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Raleway', sans-serif; 
  color: #FF724C;
    
  h1 {
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
  }  

  h2 {
    font-size: 18px;
  }
`;

const Container = styled.div`
  width: 95%;
  margin-bottom: 10vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;