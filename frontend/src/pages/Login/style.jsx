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

export const LoginWrapper = styled.main`
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

export const LoginBox = styled.div`
    height: auto;
    width: 350px;
    background-color: ${({theme}) => theme.layout.surface};
    box-shadow: ${({theme}) => theme.layout.shadow};
    border: 1px solid ${({theme}) => theme.layout.border};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;

    label{
        font-weight: 300;
        color: ${({theme}) => theme.typography.secondary};
    }

    input{
        margin-top: 5px;
        height: 35px;
        background-color: ${({theme}) => theme.layout.divider};
        border: 1px solid ${({theme}) => theme.layout.border};
        color: ${({theme}) => theme.typography.primary};
        border-radius: 5px;
        padding-left: 10px;
        
        &:focus {
            outline: none;
            border: 1px solid ${({ theme }) => theme.brand.primary};
        }

        &:nth-child(2){
            margin-bottom: 15px;
        }
    }

    button{
        margin-top: 15px;
        height: 35px;
        background-color: ${({theme}) => theme.brand.primary};
        color: #FFF;
        border: none;
        border-radius: 5px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover{
            background-color: ${({theme}) => theme.brand.primaryDark};
        }
    }

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

export const LoginFooter = styled.footer`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        display: flex;
        justify-content: center;
        height: 100%;
        padding: 0 20px;
        gap: 10px;

        & > a{
            height: 30px;
            width: 30px;

            & > img{
                height: 100%;
                width: 100%;
            }
        }
    }

    span{
        margin-top: 14px;
        font-size: 13px;
        color: ${({theme}) => theme.typography.secondary};
    }


`