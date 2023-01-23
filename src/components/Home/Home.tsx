import styled from 'styled-components';
import { Navbar } from '../Navbar/Navbar';
import { SubNavBar } from '../SubNavbar/SubNavbar';
import { Slider } from './Slider';
import { Benefits } from './Benefits';
import { Categories } from './Categories';
import { BestSellers } from './BestSellers';
import { Footer } from '../Footer/Footer';

export function Home () {
  return (
    <>
      <Navbar />
      <SubNavBar />
      <Wrapper>
        <Slider />
        <Categories />
        <BestSellers />
        <Benefits />
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
    max-width: 100vw;
    padding-top: 10vh;
    background: #DBF2B9;
`;