import styled from "styled-components";
import { Navbar } from "../Navbar/Navbar";
import { Slider } from "./Slider";

export function Home () {
    return (
        <>
            <Navbar />
            <Slider />
        </>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F5FAD1;
`