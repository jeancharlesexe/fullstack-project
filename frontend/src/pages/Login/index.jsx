import React from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";
import LoginForm from "../../components/form/LoginForm";
import { 
    LoginWrapper,
    LogoWrapper,
    LoginBox, 
    Separator,
    LoginFooter
} from "./style";
import SocialLoginButtons from "../../components/auth/SocialLoginButtons";
import Logo from '../../assets/icons/logo-original.svg';

export default function Login() {

    return(
        <>
            <ThemeToggle/>
            <LoginWrapper>
                <LogoWrapper>
                    <img src={Logo} alt="Logo"/>
                </LogoWrapper>
                <h1>Sign in to CJourney</h1>
                <LoginBox>
                    <LoginForm/>
                    <Separator>
                        <span>or</span>
                    </Separator>    
                    <LoginFooter>
                        <SocialLoginButtons actionType="login"/>
                        <span>
                            Don't have an account? <a href="/signup">Sign up</a>
                        </span>
                    </LoginFooter>
                </LoginBox>
            </LoginWrapper>
        </>

    )

}