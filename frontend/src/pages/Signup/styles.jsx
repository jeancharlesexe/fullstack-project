import styled from "styled-components";

export const LogoWrapper = styled.div`
    height: 60px;
    width: 60px;
    margin-top: 50px;
    margin-bottom: 20px;

    & > img{
        height: 100%;
        width: 100%;
    }
`

export const SignupWrapper = styled.main`
    background-color: ${({theme}) => theme.layout.background};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

export const SignupBox = styled.div`
    height: auto;
    width: 350px;
    background-color: ${({theme}) => theme.layout.surface};
    box-shadow: ${({theme}) => theme.layout.shadow};
    border: 1px solid ${({theme}) => theme.layout.border};
    border-radius: 5px;
    padding: 30px 20px;

`

export const Separator = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;

    span {
        color: ${({theme}) => theme.typography.secondary};
        padding: 0 10px;
        position: relative;
        z-index: 1;
    }

    &::before {
        content: '';
        flex-grow: 1;
        height: 1px;
        background: ${({theme}) => theme.typography.disabled}; 
        margin-right: 10px;
    }

    &::after {
        content: '';
        flex-grow: 1;
        height: 1px;
        background: ${({theme}) => theme.typography.disabled}; 
        margin-left: 10px;
    }
`;

export const SignupFooter = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span{
        margin-top: 14px;
        font-size: 13px;
        color: ${({theme}) => theme.typography.secondary};
    }


`