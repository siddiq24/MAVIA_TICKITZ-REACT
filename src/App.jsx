import React from "react"
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import LoginPage from "./pages/Login-Page"
import LandingPage from "./pages/Landing-Page.jsx"
import RegistrasiPage from "./pages/Registrasi-Page.jsx"
import MoviesListPage from "./pages/MoviesList-Page.jsx"
import Navbar from "./components/Navbar.jsx"
import DetailPage from './pages/DetailPage.jsx'
import OrderPage from './pages/OrderPage.jsx'
import Footer from "./components/Footer.jsx"
import PaymentPage from "./pages/Payment.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Registrasi" element={<RegistrasiPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Movies/:page" element={<MoviesListPage />} />
          <Route path="/Detail/:id" element={<DetailPage />} />
          <Route path="/Order/:id" element={<OrderPage />} />
          <Route path="/Payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function LandingLayout(){
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App