import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Dashboard() {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };
  
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo! Você está logado.</p>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
