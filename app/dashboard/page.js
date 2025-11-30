"use client"
import React from 'react'
import { useRouter } from "next/navigation"
import { useSession, signOut } from "next-auth/react"

const dashboard = () => {
  const { data: session } = useSession()
  const router = useRouter()
  if (!session) {
    router.push('/login')
  }
  return (
    <div className='container mx-auto py-10 px-4'>
      <h1 className='text-3xl font-bold text-center mb-8'>Welcome to your Dashboard</h1>

      <form className='max-w-2xl mx-auto space-y-4'>
        {/* Name */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="name" className='text-sm font-medium'>Name</label>
          <input type="text" id="name" name="name" className='bg-slate-800 rounded-lg p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* Email */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="email" className='text-sm font-medium'>Email</label>
          <input type="email" id="email" name="email" className='bg-slate-800 rounded-lg p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* Username */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="username" className='text-sm font-medium'>Username</label>
          <input type="text" id="username" name="username" className='bg-slate-800 rounded-lg p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* Profile Picture */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="profilePic" className='text-sm font-medium'>Profile Picture</label>
          <input type="text" id="profilePic" name="profilePic" className='bg-slate-800 rounded-lg p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* Cover Picture */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="coverPic" className='text-sm font-medium'>Cover Picture</label>
          <input type="text" id="coverPic" name="coverPic" className='bg-slate-800 rounded-lg p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* Razorpay Credentials */}
        <div className='flex flex-col gap-2'>
          <label htmlFor="razorpay" className='text-sm font-medium'>Razorpay Credentials</label>
          <input type="text" id="razorpay" name="razorpay" className='bg-slate-800 rounded-lg p-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>

        {/* Save Button */}
        <button type="submit" className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-colors'>
          Save
        </button>
      </form>
    </div>
  )

}

export default dashboard