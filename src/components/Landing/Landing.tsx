import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export function Landing () {
    const navigate = useNavigate();

    return (
        <Wrapper>        
            <h1>The Plant Collector</h1>        
            <a onClick={()=> navigate("/launch")}>get started</a>
        </Wrapper>
    )
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