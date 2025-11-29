"use client"
import React from 'react'
import {useRouter} from "next/navigation"
import{useSession, signOut} from "next-auth/react"

const dashboard= () => {
    const { data: session } = useSession()
    const router = useRouter()  
    if (!session) {
      router.push('/login')
    }
    return (
        <div>dashboard</div>
    )
 
}

export default dashboard