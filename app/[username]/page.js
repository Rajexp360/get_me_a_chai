import React from 'react'

const Username = async ({ params }) => {
    const { username } = await params;
    return (
        <div className='cover w-full bg-gray-900 text-white min-h-screen relative'>
            <div className='w-full h-[350px] relative'>
                <img
                    className='w-full h-full object-cover shadow-lg'
                    src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/8289103/46bf2753989b49ec97a9339d21f39c18/eyJ3Ijo2MjAsIndlIjoxfQ%3D%3D/1.jpg?token-hash=iFSEM9fn_iPl9GPGbGoue8YmirEJ4V_xa_4CveCV1CQ%3D&token-time=1764806400"
                    alt="Cover Image"
                />
                <div className='absolute -bottom-14 left-1/2 transform -translate-x-1/2'>
                    <img
                        className='w-32 h-32 rounded-xl border-4 border-gray-900 object-cover'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhssMUb4a0-ZlqrcMd3gv1Evq8LAgg1F7bGVyJ-CtK8nrYEhsuogH8xxdLF58LMzXeOUNhSpJ23OArCbDotDadZlb4wnBH85vz45bJlbN&s=10"
                        alt="Profile Picture"
                    />
                </div>
            </div>

            <div className='flex flex-col items-center justify-center mt-16'>
                <div className='font-bold text-2xl'>
                    @{username}
                </div>
                <div className='text-gray-400 my-2'>
                    Creating content for the community
                </div>
                <div className='text-gray-400 text-sm'>
                    12,345 members • 82 posts • $15,000/release
                </div>
            </div>
        </div>
    )
}

export default Username