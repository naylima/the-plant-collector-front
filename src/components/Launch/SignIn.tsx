import styled from "styled-components";
import { GrFacebookOption, GrGooglePlus, GrTwitter } from 'react-icons/gr';

export function SignIn ({ slide } : {slide: boolean}) {
    return (
        <Wrapper slide = {slide}>
            <h1>Sign in</h1>
            <form>
                <input type="email" name="email" placeholder=' E-mail' required />
                <input type="password" name="password" placeholder=' Password' required />
                <span>forgot password?</span>               
                <button>Sign in</button>
            </form>
            <Icons>
                <button><GrFacebookOption /></button>
                <button><GrGooglePlus /></button>
                <button><GrTwitter /></button>
            </Icons>
        </Wrapper>
    )
}

type slidePops = {
    slide: boolean
}

const Wrapper = styled.div<slidePops>`
    width: 50vw;
    height: 100vh;
    display: ${props => props.slide ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #F5FAD1;
    z-index: 1;

    position: fixed;
    left: 0;

    @media (max-width: 600px) {
        width: 100 vw;
        left: 25%;
    }

    h1 {
        font-size: 48px;
        line-height: 72px;
        color:  #F5FAD1;
        padding-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 20px;

    }

    input {
        padding: 6px 8px;
        font-size: 16px;
        border: none;
        background: none;
        color:  #F5FAD1;
        border-bottom: 2px solid #76C352;
    }

    label, span {
        font-size: 14px;
        font-weight: 500;
    }

    span {
        align-self: flex-end;
        padding-left: 40px;
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }

    button {
        height: 30px;
        margin-top: 10px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: 500;
        border: none;
        color: #F5FAD1;
        background-image: linear-gradient( to right, #083316, #76C352);
        cursor: pointer; 
        
        &:hover {
            opacity: .8;
        }
    }
`;

const Icons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;

    button {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #76C352;
        border: 1px solid #76C352;
        background: none;
    }
    
`;