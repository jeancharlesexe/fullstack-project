import styled from "styled-components";

const SocialLoginButtonsWrapper = styled.div`
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
`

export default SocialLoginButtonsWrapper;