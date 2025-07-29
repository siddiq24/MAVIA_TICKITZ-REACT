import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function RegistrasiPage() {
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

    // Cek jika user sudah login
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      window.location.href = "/";
    }

    if (!hasError) {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      console.log(email, password)
      // Ambil data user dari localStorage
      const emailExist = users.some(user => user.email === email);

        if (emailExist) {
          const user = users.find(user => user.email === email && user.password === password);
            if (user) {
                // Simpan data user yang login
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                window.location.href = "/";
            } else {
                alert("🚫 Email sudah terdaftar");
            }
        } else {
            const newUser = {
                email: email,
                password: password
            };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            // Simpan data user yang baru registrasi sebagai logged in
            localStorage.setItem("loggedInUser", JSON.stringify(newUser));

            alert("✅ Registrasi berhasil!");
            window.location.href = "/";
        }
    }
  }
  return (
    <div className="bg-[url('/Hero.png')] h-screen w-screen bg-center bg-cover flex flex-col justify-center items-center bg-black/60 bg-blend-darken backdrop-brightness-75 px-6">
      <img src="/Logo-Tickitz.png" alt="Logo Tickitz" className="w-[40%] md:w-[10%] mb-14" />
      <section className="bg-white w-[90vw] max-w-[600px] mx-auto rounded-2xl min-h-44 px-8 py-16 shadow-lg md:px-18">
        <div className="form-wrapper space-y-6">
          {/* Step Indicator */}
          <div className="steps items-center px-8 gap-4 justify-around text-gray-700 text-sm hidden md:flex">
            <section className="active flex flex-col gap-5 items-center space-x-2">
              <div className="stepNumber bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full">1</div>
              <div className="step">Fill Form</div>
            </section>
            <div className="border-t border-dashed flex-1 border-gray-400 h-[24px]"></div>
            <section className="flex flex-col gap-5 items-center space-x-2">
              <div className="stepNumber bg-gray-300 text-black w-12 h-12 flex items-center justify-center rounded-full">2</div>
              <div className="step">Activate</div>
            </section>
            <div className="border-t border-dashed flex-1 border-gray-400 h-[24px]"></div>
            <section className="flex flex-col gap-5 items-center space-x-2">
              <div className="stepNumber bg-gray-300 text-black w-12 h-12 flex items-center justify-center rounded-full">3</div>
              <div className="step">Done</div>
            </section>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-lg font-extralight text-gray-700">Email</label>
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
              <label htmlFor="password" className="block text-lg font-extralight text-gray-700">Password</label>
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

            <div className="checkbox flex items-center space-x-2">
              <input type="checkbox" id="terms" required className="form-checkbox h-4 w-4 text-blue-600" />
              <label htmlFor="terms" className="text-sm text-gray-700">I agree to terms & conditions</label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-xl hover:bg-blue-700 text-white py-4 rounded-md transition duration-200">
              Join For Free Now
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
          </p>

          {/* Divider */}
          <div className="flex items-center space-x-2">
            <hr className="flex-grow border-t-2 border-gray-200" />
            <div className="px-4 text-gray-500">or</div>
            <hr className="flex-grow border-t-2 border-gray-200" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-12 justify-center">
            <a href="https://google.com" className="flex items-center justify-center gap-2 shadow-md px-6 py-6 rounded-md hover:bg-gray-100 transition">
              <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google icon" className="w-7 h-7" />
              <span className="text-sm hidden md:block">Google</span>
            </a>
            <a href="https://facebook.com" className="flex items-center justify-center gap-2 shadow-md px-6 py-6 rounded-md hover:bg-gray-100 transition">
              <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook icon" className="w-7 h-7" />
              <span className="text-sm hidden md:block">Facebook</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RegistrasiPage