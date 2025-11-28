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

      <div>
        {session ? (
          <div className='flex items-center '>
            <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="inline-flex items-center bg-linear-to-r cursor-pointer from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 mr-2 focus:outline-none" type="button">
              {session.user.name}
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
            </button>
            
            <Link href="/profile" className="inline-block bg-linear-to-r cursor-pointer from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 ">
              Profile
            </Link>
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


// {session && 
//      <>

// <button id="dropdownDelayButton" data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
//   Dropdown button 
//   <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
// </button>

// {/* {<!-- Dropdown menu -->} */}
// <div id="dropdownDelay" className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44">
//     <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownDelayButton">
//       <li>
//         <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard</a>
//       </li>
//       <li>
//         <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Settings</a>
//       </li>
//       <li>
//         <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Earnings</a>
//       </li>
//       <li>
//         <a href="#" className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out</a>
//       </li>
//     </ul>
// </div>


      
//      </>

// }