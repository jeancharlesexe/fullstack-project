import styled from "styled-components";

export const LoginWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginBox = styled.div`
    height: 400px;
    width: 350px;
    background-color: ${({theme}) => theme.colors.surface};
    box-shadow: ${({theme}) => theme.shadows[1]};
    border: 1px solid ${({theme}) => theme.colors.border};
    border-radius: 5px;
`