import styled from 'styled-components';

export function Footer() {
  return(
    <Wrapper>
      <h1>The Plant Collector</h1>
      <p><span>E-mail: </span>theplantcollector@tpc.com</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Raleway', sans-serif;
  
  background: linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.5)),
    url('https://picstatio.com/large/29e592/fern-leaves-tree.jpg');
  background-position: center;
  background-size: cover;

  h1, p {
    color:  #F5FAD1;
    opacity: .7;
  }

  h1 {
    text-align: center;
    font-size: 48px;
    padding-bottom: 20px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
  }

  span {
    font-weight: bold;
  }
`;
