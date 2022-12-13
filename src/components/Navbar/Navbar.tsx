import styled from "styled-components";
import { RxDotFilled, RxPerson, RxHamburgerMenu } from 'react-icons/rx';
import { TfiSearch } from 'react-icons/tfi';

export function Navbar () {
    return (
        <Wrapper>
            <div className="logo">
                <h1>The Plant Collector</h1>
            </div>
            <div>
                <p>Home</p>
                <RxDotFilled />
                <p>Categories</p>
                <RxDotFilled />
                <p>News</p>
            </div>
            <div>
                <TfiSearch className="icon"/>
                <RxPerson className="icon"/>
                <RxHamburgerMenu className="icon"/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #083316;
    font-family: 'Raleway', sans-serif;

    position: fixed;
    z-index: 1;

    div {
        width: 25vw;
        gap: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        text-transform: uppercase;
        letter-spacing: 1.8px;
        font-size: 20px;
    }

    .icon, h1, p {
        cursor: pointer;
        :hover {
            color: #189E1E;
        }
    }


`;