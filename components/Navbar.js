import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 text-white flex justify-between items-center'>
      <div className='logo text-lg flex font-bold ml-5 '>

        <img src="/gif/tea.gif" alt="tea icon" className='inline-block h-6 w{13px} mr-2' />
        <span>GetMeAChai</span>

      </div>


      {/* 
        <ul className='flex justify-between gap-5 p-4 '>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>          
            <li>Contact</li>   
        </ul> */}
      <div>
        <Link href="/login">
          <button className="bg-gradient-to-r cursor-pointer from-purple-500
       to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2
       px-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 m-2">Login</button>
        </Link>

      </div>


    </nav>



  )
}

export default Navbar


