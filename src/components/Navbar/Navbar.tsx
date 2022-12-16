import styled from "styled-components";
import { RxDotFilled, RxPerson, RxHamburgerMenu } from 'react-icons/rx';
import { TfiSearch } from 'react-icons/tfi';

export function Navbar () {
    return (
        <Wrapper>
            <Container>
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
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    color: #083316;
    font-family: 'Raleway', sans-serif;

    position: fixed;
    top: 0;
`;

const Container = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div { 
        width: 30vw;       
        gap: 10px;
        display: flex;
        align-items: center;
    }

    div:nth-child(2) {
        justify-content: center;
    }

    div:nth-child(3) {
        justify-content: flex-end;
    }

    h1 {
        letter-spacing: 1.8px;
        font-size: 2em;
        font-weight: 900;
        color: transparent;
        background-image:url(https://outforia.com/wp-content/uploads/2022/01/shutterstock_1701764590.jpg);
        background-size:contain;
        background-clip: text;
        -webkit-background-clip: text;
    }

    .icon, h1, p {
        cursor: pointer;
        :hover {
            opacity: .8;
        }
    }
`;