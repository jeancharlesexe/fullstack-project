import React from "react";
import ThemeToggle from "../../components/ui/ThemeToggle";
import { 
    LoginWrapper,
    LoginBox
 } from "./style";

export default function Login() {

    return(
        <>
            <ThemeToggle/>
            <LoginWrapper>
                <LoginBox>
                    
                </LoginBox>
            </LoginWrapper>
        </>

    )

}