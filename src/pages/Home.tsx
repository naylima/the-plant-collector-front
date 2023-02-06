import styled from 'styled-components';
import { Navbar } from '../components/Navbar/Navbar';
import { SubNavBar } from '../components/SubNavbar/SubNavbar';
import { Slider } from '../components/Home/Slider';
import { Benefits } from '../components/Home/Benefits';
import { Categories } from '../components/Home/Categories';
import { BestSellers } from '../components/Home/BestSellers';
import { Footer } from '../components/Footer/Footer';

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
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.div`
    max-width: 100vw;
    padding-top: 10vh;
    background: #DBF2B9;
`;