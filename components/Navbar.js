"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"





const Navbar = () => {
  const { data: session } = useSession()

  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center px-4 h-16'>
      <div className='logo text-lg flex font-bold ml-5 '>
        <Link href={"/"}>
          <img src="/gif/tea.gif" alt="tea icon" className='inline-block h-6 w-[13px] mr-2' />
          <span>GetMeAChai</span>
        </Link>
      </div>

      {/* 
        <ul className='flex justify-between gap-5 p-4 '>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>          
            <li>Contact</li>   
        </ul> */}

      <div>
        {session ? (
          <div className='flex items-center gap-4'>
            <span>Signed in as {session.user.email}</span>
            <button onClick={() => signOut()} className="bg-linear-to-r cursor-pointer from-purple-500
       to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2
       px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 m-2">Sign out</button>
          </div>
        ) : (
          <Link href="/login">
            <button className="bg-linear-to-r cursor-pointer from-purple-500
       to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2
       px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 m-2">Login</button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar


