import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/Login-Page"
import LandingPage from "./pages/Landing-Page.jsx"
import RegistrasiPage from "./pages/Registrasi-Page.jsx"
import MoviesListPage from "./pages/MoviesList-Page.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Registrasi" element={<RegistrasiPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Movies" element={<MoviesListPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App