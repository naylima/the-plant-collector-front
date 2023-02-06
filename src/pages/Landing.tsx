import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export function Landing () {
  const navigate = useNavigate();

  return (
    <Wrapper>   
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <h1>The Plant Collector</h1>
      </motion.div>          
      <a onClick={()=> navigate('/launch')}>get started</a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif; 
  background-color: #F5FAD1; 

  h1 {
    text-align: center;
    font-weight: 900;
    font-size: 6em;
    color: transparent;
    background-image:url(https://outforia.com/wp-content/uploads/2022/01/shutterstock_1701764590.jpg);
    background-size:contain;
    background-clip: text;
    -webkit-background-clip: text;

    @media (max-width: 600px) {
        font-size: 5em;
    }
  }

  a {
    font-weight: 500;
    color: #083316;
    opacity: .7;
    cursor: pointer;

    position: fixed;
    bottom: 20px;

    &:hover {
        text-decoration: underline;
    }
  }
`;