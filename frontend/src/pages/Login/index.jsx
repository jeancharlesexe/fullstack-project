import React from "react";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === 'jean@gmail.com' && password === '123456') {
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/dashboard';
        }else{
            alert('Email ou senha inválidos!'); 
        }
    }

    return(
        <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input 
                type="email"
                value={email}
                onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </div>
    )

}