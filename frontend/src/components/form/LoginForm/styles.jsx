import styled from "styled-components";

const LoginFormWrapper = styled.form`
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    
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

export default LoginFormWrapper;