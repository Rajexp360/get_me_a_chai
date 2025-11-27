import React from 'react'

const Username = async ({ params }) => {
    const { username } = await params
    return (
        <div className="flex items-center justify-center min-h-screen sticky overflow-hidden">
                    <div> Thanks for visiting our website {username}</div>

        </div>
    )
}

export default Username