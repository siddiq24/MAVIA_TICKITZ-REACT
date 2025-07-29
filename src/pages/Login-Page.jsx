import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newError = { email: '', password: '' }
    let hasError = false

    if (!email) {
      newError.email = 'Email is required'
      hasError = true
    }
    if (!password) {
      newError.password = 'Password is required'
      hasError = true
    }

    setError(newError)
    
    if (!hasError) {
      console.log(email, password)
      // Ambil data user dari localStorage
      let users = JSON.parse(localStorage.getItem("users")) || [];


      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        // Simpan data user yang login
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "/";
      } else {
        alert("Email atau password salah");
      }

    }
  }
  return (
    <div className="bg-[url('/Hero.png')] h-screen w-screen bg-center bg-cover flex flex-col justify-center items-center bg-black/60 bg-blend-darken backdrop-brightness-75 px-6">
      <img src="/Logo-Tickitz.png" alt="Logo Tickitz" className="w-[40%] md:w-[10%] mb-14" />
      <section className="bg-white w-[90vw] max-w-[600px] mx-auto rounded-2xl min-h-44 px-8 py-16 shadow-lg md:px-18">
        <div className="form-wrapper space-y-6">
          <h1 className="text-3xl">Welcome Back 👋</h1>
          <p className="tracking-wider text-gray-400">
            Sign in with the data you entered during registration
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg font-extralight text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error.email && <div className="text-xs text-red-500 mt-1">{error.email}</div>}
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-extralight text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  className="mt-1 w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 opacity-60 cursor-pointer"
                  src="https://img.icons8.com/?size=100&id=7tg2iJatDNzj&format=png&color=838383"
                  alt="Toggle password"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              {error.password && <div className="text-xs text-red-500 mt-1">{error.password}</div>}
            </div>

            <div className="flex">
              <a href="#" className="text-blue-500 flex-1 text-end">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-xl hover:bg-blue-700 text-white py-4 rounded-md transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center space-x-2">
            <hr className="flex-grow border-t-2 border-gray-200" />
            <div className="px-4 text-gray-500">or</div>
            <hr className="flex-grow border-t-2 border-gray-200" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-12 justify-center">
            <a
              href="https://google.com"
              className="flex items-center justify-center gap-2 shadow-md px-6 py-6 rounded-md hover:bg-gray-100 transition"
            >
              <img
                src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
                alt="google icon"
                className="w-7 h-7"
              />
              <span className="text-sm hidden md:block">Google</span>
            </a>
            <a
              href="https://facebook.com"
              className="flex items-center justify-center gap-2 shadow-md px-6 py-6 rounded-md hover:bg-gray-100 transition"
            >
              <img
                src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000"
                alt="facebook icon"
                className="w-7 h-7"
              />
              <span className="text-sm hidden md:block">Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LoginPage