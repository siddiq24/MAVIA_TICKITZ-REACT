import React from 'react'
import Register from '../components/Register.jsx'

function LoginPage() {
  return (
    <div className="bg-[url('/Hero.png')] h-screen w-screen bg-center bg-cover flex flex-col justify-center items-center bg-black/50 bg-blend-darken">
      <img src="/Logo-Tickitz.png" alt="Logo Tickitz" className='h-auto w-[30%] md:w-[10%] mb-18'/>
      <Register />
    </div>
  )
}

export default LoginPage