import styled from "styled-components";
import { GiMonsteraLeaf } from 'react-icons/gi';

export function Header () {
    return (
        <Wrapper>
            <div className="logo">
                <h1>The Plant Collector</h1>
                <GiMonsteraLeaf />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   width: 100vw;
   height: 10vh;
   padding: 20px;
   display: flex;
   align-items: center;

   background-image: linear-gradient( to right, #083316, #76C352);

   font-family: 'Raleway', sans-serif;

   .logo {
        display: flex;
        gap: 10px;
        font-size: 28px;
        color: #F5FAD1;
   }
`;