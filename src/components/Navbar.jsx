import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { Svg } from '../data/Svg'

function Navbar() {

    // const [loged, setLoged] = useState('')
    const [sidebar, setSidebar] = useState(true)
    // const loged = true;


    return (
        <header className='flex items-center justify-between px-8 md:px-[10%] py-8 shadow sticky top-0 right-0 left-0 z-50 overflow-hidden'
        style={{backdropFilter: (sidebar)&& 'blur(10px)', backgroundColor: (sidebar)?'rgba(225,225,225,0.5':'white'}}>
            <div>
                <Svg.Tickitz/>
            </div>
            <nav style={{
                right: (sidebar) ? '-50%':'0',
            }} className='fixed right-0 bg-blue-300/50 backdrop-blur-xl h-screen top-0 z-40 bottom-0 flex flex-col justify-between w-[45%] px-8 pt-32 py-8 text-2xl items-end text-right'>
                <ul>
                    <li className='my-6 text-3xl '><a href="/">Home</a></li>
                    <li className='my-6 text-3xl '><a href="/Movies">Movie</a></li>
                    <li className='my-6 text-3xl '><a href="/">Buy Ticket</a></li>
                </ul>
                <ul className="flex flex-col w-full items-center gap-2" id="authButtons">
                    <ul className="block rounded-xl w-[100%] bg-blue-500 text-lg text-white py-2 text-center"><Link to = '/Registrasi' >SignIn</Link></ul>
                    <ul className="block rounded-xl w-[100%] bg-white text-lg text-blue-800 py-2 text-center"><Link to = "/Login" >SignUp</Link></ul>
                    <ul><Link onClick='alert("Berhasil Log Out")' className="rounded-xl w-[100%] bg-blue-500 text-lg py-2 hidden" id="logoutBtn1">LogOut</Link></ul>
                </ul>
            </nav>

            <ul className='md:flex gap-8 hidden'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Movies/1">Movie</Link></li>
                <li><Link to="/Order">Buy Ticket</Link></li>
            </ul>

            <button className="relative w-7 h-7 z-50 flex flex-col items-end justify-between md:hidden" onClick={() => setSidebar(!sidebar)}>
                <span className={`w-full h-[4px] bg-black rounded-xl ${(!sidebar)&&'rotate-45 translate-y-[13px]'}`}></span>
                <span className={`h-[4px] bg-black rounded-xl ${(!sidebar)?'w-full -rotate-45':'w-[60%]'}`}></span>
                <span className={`h-[4px] bg-black rounded-xl ${(!sidebar)?'w-0':'w-full'}`}></span>
            </button>

            <div id="userDropdown" className="hidden">
                <img src="/profile.png" alt="User Avatar" id="userAvatar"
                    className='w-20 h-20 object-cover rounded-full ' />
                <div className="dropdown">
                    <button className="logout2 " id="logoutBtn2">LogOut</button>
                </div>
            </div>

            <ul className="hidden md:flex gap-2" id="authButtons">
                <li className='bg-white px-6 py-3 rounded-xl border-2 border-blue-600'><Link to = '/Registrasi'>SignIn</Link></li>
                <li className='bg-blue-600 px-6 py-3 rounded-xl border border-blue-600'><Link to = "/Login">SignUp</Link></li>
            </ul>
        </header>
    )
};

export default Navbar