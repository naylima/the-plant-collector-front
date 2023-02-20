import styled from 'styled-components';

import { useState, useEffect, useRef, ChangeEvent} from 'react';
import {DebounceInput} from 'react-debounce-input';
import { TfiSearch } from 'react-icons/tfi';

import { SearchResults } from './SearchResults';
import { listProducts } from '../../services/productsApi';

interface Product {
  id: string,
  name: string,
  image: string,
  description: string,
  price: number,
  stock: number
}

export function SearchBar() {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [keyword, setKeyword] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handler = (e: MouseEvent | null) => {
      if (searchRef.current !== null && e !== null) {
        const target = e.target as Element;
        if (!searchRef?.current.contains(target)) {
          setProducts([]);
          setHidden(true);
        }
      }
    };

    document.addEventListener('mousedown', handler);
  }, []);
 
  useEffect(() => {
    const promise = listProducts(keyword);
    promise.then((res => {
      setProducts(res);
    }));
    promise.catch(() => setProducts([]));
  }, [keyword]);

  function sendForm () {
    const promise = listProducts(keyword);
    
    promise.then((res => {
      setProducts(res);
      setHidden(false);
    }));
    promise.catch(() => setProducts([]));   
  };

  return (
    <Wrapper ref={searchRef}>
      <Form>
        <Input
          minLength={3}
          debounceTimeout={300}
          type='text'
          placeholder='What are you looking for?'
          value={keyword} 
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setKeyword(e.target.value);
            setHidden(false);
          }}
        />
        
        <Search onClick={() => sendForm()}/>        
      </Form>
      
      <SearchResults hidden={hidden} products={products}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Input = styled(DebounceInput)`
  width: 90%;
  padding: 6px 8px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  background: rgba(118, 195, 82, .1);
  color: #083316;
  font-family: 'Raleway', sans-serif;

  ::placeholder {
  color: #76C352;
  }

  :focus {
    border: 1px solid #76C352;
  }
`;

const Search = styled(TfiSearch)`
  margin-left: 10px;
  font-size: 22px;
  cursor: pointer;

  :hover {
      opacity: .8;
  }
`;
