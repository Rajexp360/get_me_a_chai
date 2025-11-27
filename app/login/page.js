
"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react" 

import { FcGoogle } from 'react-icons/fc';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaGithub, FaApple } from 'react-icons/fa';

const page = () => {
  return (
    <div className="text-white flex justify-center flex-col my-14 items-center">

      <h1 className='text-3xl text-center font-bold'>Login/Signup to Get your Fans to Support You</h1>

      <div className='flex flex-col gap-2 mt-8 px-4 max-w-sm'>
        <button className='flex items-center justify-start gap-2 px-8 py-2 border border-transparent rounded-lg text-black bg-white hover:bg-gray-200 transition-colors'>
          <FcGoogle className='text-xl' /> Continue with Google
        </button>
        <button className='flex items-center justify-start gap-2 px-8 py-2 border border-transparent rounded-lg text-black bg-white hover:bg-gray-200 transition-colors'>
          <FaLinkedinIn className='text-xl text-[#0077B5]' /> Continue with LinkedIn
        </button>
        <button className='flex items-center justify-start gap-2 px-8 py-2 border border-transparent rounded-lg text-black bg-white hover:bg-gray-200 transition-colors'>
          <FaTwitter className='text-xl text-[#1DA1F2]' /> Continue with Twitter
        </button>
        <button className='flex items-center justify-start gap-2 px-8 py-2 border border-transparent rounded-lg text-black bg-white hover:bg-gray-200 transition-colors'>
          <FaFacebookF className='text-xl text-[#1877F2]' /> Continue with Facebook
        </button>
        <button className='flex items-center justify-start gap-2 px-8 py-2 border border-transparent rounded-lg text-black bg-white hover:bg-gray-200 transition-colors'>
          <FaGithub className='text-xl' /> Continue with GitHub
        </button>
        <button className='flex items-center justify-start gap-2 px-8 py-2 border border-transparent rounded-lg text-black bg-white hover:bg-gray-200 transition-colors'>
          <FaApple className='text-xl' /> Continue with Apple
        </button>
      </div>
    </div>
  )
}

export default page
