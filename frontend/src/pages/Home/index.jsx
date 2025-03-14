import React from "react";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div>
    <h1>Página Inicial</h1>
      <Link to="/login">Fazer Login</Link>
    </div>
  );
}