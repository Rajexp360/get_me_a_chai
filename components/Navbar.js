"use client"
import React, { useState, useEffect, useRef } from "react";

import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
  const [showdropdown, setshowdropdown] = useState(false)
  const { data: session } = useSession()
  const dropdownRef = useRef(null)
  useEffect(() => {
    function handleClickOutside(event){
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setshowdropdown(false);
      }
    }
     document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [dropdownRef])
  



  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
      <div className='logo text-lg flex font-bold ml-5 '>
        <Link href={"/"}>
          <img src="/gif/tea.gif" alt="tea icon" className='inline-block h-6 w-[13px] mr-2' />
          <span>GetMeAChai</span>
        </Link>
      </div>

      <div>
        {session ? (
          <div className='flex items-center'>
            <div ref={dropdownRef} className="relative mx-2">
              <button onClick={() => setshowdropdown(!showdropdown)} id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="inline-flex items-center bg-linear-to-r cursor-pointer from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 focus:outline-none" type="button">
                {session.user.name}
                <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>
              </button>

              <div className={`absolute z-10 mt-2 left-1.5 bg-gray-800 rounded-lg shadow-lg w-44 origin-top-right transition-all duration-300 ease-out ${showdropdown ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}>
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link href="#" className="block ml-4 py-2 text-white transition-transform duration-400 hover:scale-105">Dashboard</Link>
                  </li>
                  <li>
                    <Link href="#" className="block ml-4 py-2 text-white transition-transform duration-400 hover:scale-105">Your Page</Link>
                  </li>
                 
                  <li>
                    <Link onClick={() => signOut()} href="#" className="block ml-4 py-2 text-white transition-transform duration-400 hover:scale-105">Sign out</Link>
                  </li>
                </ul>
              </div>

            </div>


            <button onClick={() => signOut()} className="bg-linear-to-r cursor-pointer from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 m-2">Sign out</button>
          </div>
        ) : (
          <Link href="/login" className="inline-block bg-linear-to-r cursor-pointer from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 m-2">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar

