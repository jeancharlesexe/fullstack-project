import React from "react";

export default function Signup() { 
    return(
        <div>
            <h1>Cadastro</h1>
            <form>
                <div>
                    <label>Nome:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
} 