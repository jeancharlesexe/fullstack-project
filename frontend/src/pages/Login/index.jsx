import React from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";
import { 
    LoginWrapper,
    LogoWrapper,
    LoginBox, 
    Separator,
    LoginFooter
} from "./style";

import Logo from '../../assets/icons/logo-original.svg';
import GithubLogo from '../../assets/icons/github-black-logo.svg';
import GoogleLogo from '../../assets/icons/google-original-logo.svg';
import MicrosoftLogo from '../../assets/icons/microsoft-original-logo.svg';

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
                    <label>
                        Username
                    </label>
                    <input type="text" placeholder="Username or email..."/>
                    <label>
                        Password
                    </label>
                    <input type="password" placeholder="∗∗∗∗∗∗∗∗∗"/>
                    <button type="submit">Sign in</button>
                    <Separator>
                        <span>or</span>
                    </Separator>    
                    <LoginFooter>
                        <div>
                            <a href="#">
                                <img src={GithubLogo} alt="Sign in with Google"/>
                            </a>
                            <a href="#">
                                <img src={GoogleLogo} alt="Sign in with Google"/>
                            </a>
                            <a href="#">
                                <img src={MicrosoftLogo} alt="Sign in with Google"/>
                            </a>
                        </div>
                        <span>
                            Don't have an account? <a href="/signup">Sign up</a>
                        </span>
                    </LoginFooter>
                </LoginBox>
            </LoginWrapper>
        </>

    )

}