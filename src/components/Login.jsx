import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <section className="bg-white w-[90vw] max-w-[500px] mx-auto rounded-2xl min-h-44 px-8 py-16 shadow-lg">
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
                <h1 className='text-3xl'>Welcome Back 👋</h1>
                <p className='tracking-wider text-gray-400'>Sign in with your data that you entered during your registration</p>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-lg font-extralight text-gray-700">Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email"
                            className="email-input mt-1 w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <div className="alert email text-xs text-red-500"></div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-lg font-extralight text-gray-700">Password</label>
                        <div className="password-input relative">
                            <input type="password" id="password" name="password" placeholder="Enter your password"
                                className="mt-1 w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <img className="eye-icon absolute top-1/2 right-3 transform -translate-y-1/2 w-5 h-5 opacity-60 cursor-pointer"
                                src="https://img.icons8.com/?size=100&id=7tg2iJatDNzj&format=png&color=838383"
                                alt="show password" />
                        </div>
                        <div className="alert pass text-xs text-red-500"></div>
                    </div>

                    <div className='flex '>
                    <a href="#" className='text-blue-500 flex-1 text-end'>Forget your password?</a>
                    </div>

                    <button type="submit"
                        className="submit-btn w-full bg-blue-600 text-xl hover:bg-blue-700 text-white py-4 rounded-md transition duration-200">
                        Login
                    </button>
                </form>

                {/* Login Link */}
                <p className="login-link text-center text-sm text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
                </p>

                {/* Divider */}
                <div className="line-or flex items-center space-x-2">
                    <hr className="flex-grow border-t-2 border-gray-200" />
                    <div className="text-or px-4 text-gray-500">or</div>
                    <hr className="flex-grow border-t-2 border-gray-200" />
                </div>

                {/* Social Buttons */}
                <div className="social-buttons flex gap-12 justify-center">
                    <a href="https://google.com" className="google flex items-center justify-center gap-2  shadow-md px-6 py-6 rounded-md hover:bg-gray-100 transition">
                        <img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="google icon" className="w-7 h-7" />
                        <span className="text-sm hidden md:block">Google</span>
                    </a>
                    <a href="https://facebook.com" className="facebook flex items-center justify-center gap-2 shadow-md  px-6 py-6 rounded-md hover:bg-gray-100 transition">
                        <img src="https://img.icons8.com/?size=100&id=118497&format=png&color=000000" alt="facebook icon" className="w-7 h-7" />
                        <span className="text-sm hidden md:block">Facebook</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Login