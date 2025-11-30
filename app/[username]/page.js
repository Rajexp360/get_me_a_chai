import React from 'react'

const Username = async ({ params }) => {
    const { username } = await params;
    return (
        <div className='cover w-full text-white min-h-screen relative'>
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
            <div className="container  w-[80%] my-3 mx-auto flex gap-3">
                <div className="supporters bg-slate-900 rounded-lg p-10 text-white  w-1/2">
                    <h1 className="text-xl font-bold">Supporters</h1>
                    <ul className="mt-3 ml-3">
                        <li><img src="/gif/users.png" className='inline-block w-8 mx-2 my-1' alt="" />Rajesh donated <span className="font-bold text-xl text-green-400 rounded-full" >$30</span> with message lots of love from Nepal💖</li>
                        <li><img src="/gif/users.png" className='inline-block w-8 mx-2 my-1' alt="" />Rajesh donated <span className="font-bold text-xl text-green-400 rounded-full" >$30</span> with message lots of love from Nepal💖</li>
                        <li><img src="/gif/users.png" className='inline-block w-8 mx-2 my-1' alt="" />Rajesh donated <span className="font-bold text-xl text-green-400 rounded-full" >$30</span> with message lots of love from Nepal💖</li>

                    </ul>
                </div>
                <div className="makepayment rounded-lg bg-slate-900 p-10 text-white w-1/2">
                    <h1 className="text-xl font-bold">Make Payment</h1>
                    <div className="flex flex-col gap-2 mt-3">
                        <input type="text" className="w-full p-2 rounded-lg bg-slate-800" placeholder="Enter Name" />
                        <input type="text" className="w-full p-2 rounded-lg bg-slate-800" placeholder="Enter Message" />
                        <input type="text" className="w-full p-2 rounded-lg bg-slate-800" placeholder="Enter Amount" />
                        <button type="button" className="bg-gradient-to-r cursor-pointer from-purple-500 to-pink-500
                         hover:from-purple-600 hover:to-pink-600 text-white p-2 rounded-lg font-bold shadow-lg 
                         transition-all duration-300">Pay</button>
                    </div>
                    <div className="flex gap-2 mt-5">
                        <button className="bg-slate-800 p-2 hover:scale-110 transition-all duration-300 rounded-lg">Pay $10</button>
                        <button className="bg-slate-800 p-2 hover:scale-110 transition-all duration-300 rounded-lg">Pay $20</button>
                        <button className="bg-slate-800 p-2 hover:scale-110 transition-all duration-300 rounded-lg">Pay $30</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Username