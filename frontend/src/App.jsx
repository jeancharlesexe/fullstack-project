import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from './contexts/ThemeContext'
import GlobalStyle from './styles/GlobalStyles.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}