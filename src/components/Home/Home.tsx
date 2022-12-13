import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";

export function Home () {
    return (
        <>
            <Navbar />
        </>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F5FAD1;
`