import React from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";
import { 
    SignupWrapper,
    SignupBox,
    LogoWrapper,
    SignupFooter,
    Separator
} from "./styles";
import SocialLoginButtons from "../../components/auth/SocialLoginButtons";
import Logo from '../../assets/icons/logo-original.svg';

export default function Signup() { 
    return(
        <>
            <ThemeToggle/>
            <SignupWrapper>
                <LogoWrapper>
                    <img src={Logo} alt="Logo"/>
                </LogoWrapper>
                <h1>Sign up to CJourney</h1>
                <SignupBox>
                    <p>future form of signup</p>
                    <Separator>
                        <span>or</span>
                    </Separator>    
                    <SignupFooter>
                        <SocialLoginButtons actionType="signup"/>
                        <span>
                            Do you have an account? <a href="/login">Log in</a>
                        </span>
                    </SignupFooter>
                </SignupBox>
            </SignupWrapper>
        </>
    )
} 