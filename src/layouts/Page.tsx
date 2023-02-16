import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { Navbar } from '../components/Navbar/Navbar';
import { SubNavBar } from '../components/SubNavbar/SubNavbar';
import { Footer } from '../components/Footer/Footer';

export function Page() {
  return (
    <>
      <Navbar />
      <SubNavBar />

      <Container>
        <Outlet />
      </Container>

      <Footer />
    </>
  );
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 60vh;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  background: #DBF2B9;
  font-family: 'Raleway', sans-serif;
`;