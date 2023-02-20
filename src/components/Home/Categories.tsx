import styled from 'styled-components';

import indoor from '../../assets/img/indoor.jpg';
import outdoor from '../../assets/img/outdoor.jpg';
import air from '../../assets/img/air.jpg';
import pots from '../../assets/img/pots.jpg';

import { useNavigate } from 'react-router-dom';

const categories = [
  {
    name: 'Indoor Plants',
    image: indoor,
    id: '90168b24-4221-44d5-97c1-8e487771f6be'
  },
  {
    name: 'Air Plants',
    image: air,
    id: '0f2fa619-e49f-49ed-ac9c-39e035fa21c3'
  },
  {
    name: 'Outdoor Plants',
    image: outdoor,
    id: 'b5ea3003-485e-49d2-8944-8e8ecf2508fd'
  },
  {
    name: 'Pots & Accessories',
    image: pots,
    id: '7484eec4-4ec8-460b-b384-6e9fd05f3f06'
  }
];

export function Categories() {
  const navigate = useNavigate();
  
  return (
    <Wrapper>
      <h1>Browse all things pretty</h1>
      <Container>
        {
          categories.map((category) => (
            <Category 
              key={category.name}
              image={category.image}
              onClick={() => navigate(`${category.id}`, {state: { name: category.name }})}
            >
              <h2>{category.name}</h2>
            </Category>
          ))
        }       
      </Container>
    </Wrapper>
  );
}

type Props = {
  image: string
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 60vh;
  padding: 5vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: 'Raleway', sans-serif;

  h1 {
    font-size: 2em;
    line-height: 3em;
    font-weight: 500;
    color: #76C352;
  }
`;

const Container = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Category = styled.div<Props>`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 250ms ease;

  background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.5)),
    url(${props => props.image});
  background-position: center;
  background-size: cover;
  
  border-radius: 20px;
  border: 3px solid #F5FAD1;

  :hover{
    border: 3px solid #76C352;
    filter: brightness(1.2);

    h2 {
      font-weight: 700;
    }
  }

  h2 {
    color: #F5FAD1;;
    font-size: 26px;
    font-weight: 600;
    text-shadow: black 0.1em 0.1em 0.2em;
    transition: all 500ms ease;
  }
`;