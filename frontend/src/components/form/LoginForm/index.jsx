import React from "react";

import LoginFormWrapper from "./styles";

const LoginForm = ()=>{
    return(
        <LoginFormWrapper>
            <label htmlFor="username">
                Username
            </label>
            <input type="text" placeholder="Username or email" id="username"/>
            <label htmlFor="password"> 
                Password
            </label>
            <input type="password" placeholder="∗∗∗∗∗∗∗∗∗" id="password"/>
            <button type="submit">Sign in</button>
        </LoginFormWrapper>
    )
}

export default LoginForm;