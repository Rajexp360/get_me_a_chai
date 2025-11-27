
export default function Home() {
  return (
    <>
      <div className="flex justify-center  flex-col  items-center h-[40vh]" >

        <div className="text-5xl pt-10 flex gap-4 justify-center items-center text-white  font-bold">
          Buy Me a Chai
          <span><img className="h-10 align-middle" src="/gif/tea.gif" alt="A cup of chai" /></span>

        </div>
        <p className="text-white">A crowdfunding platform for creators. Get funded by your fans and followers. Start a campaign now!</p>
        <div className="flex gap-2">
          <button className="bg-linear-to-r cursor-pointer from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-500 hover:scale-105 mt-4">Start Now</button>
          <button className="bg-linear-to-r cursor-pointer from-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition duration-500 hover:scale-105 mt-4">Read More</button>
        </div>
      </div>

      <div className="bg-white opacity-5 w-full h-0.5">
      </div>


      <div className=" mx-auto my-12">
        <h1 className="text-white text-center mx-auto text-xl font-bold">Your Fans can get you a Chai</h1>

        <div className="text-white mx-auto text-xl font-bold">
          <div className="flex justify-center gap-20 mt-4 items-center">
            <div className="flex flex-col items-center justify-center">
              <img className="h-24" src="/gif/man.gif" alt="" />
              <p className="text-white text-sm">Fund Yourself</p>
              <p className="text-white text-center font-bold mt-2  text-sm font-sans">Your fans are available for you to help</p>

            </div>
            <div className="flex flex-col items-center justify-center">
              <img className="h-24 rounded-full" src="/gif/coin.gif" alt="" />
              <p className="text-white text-sm">Fund Yourself</p>
              <p className="text-white text-center font-bold mt-2  text-sm font-sans">Your fans are available for you to help</p>

            </div>

            <div className="flex flex-col items-center justify-center">
              <img className="h-24" src="/gif/team.gif" alt="" />
              <p className="text-white text-sm">Fans wants to help</p>
              <p className="text-white text-center font-bold mt-2  text-sm ">Your fans are available for you to help</p>
            </div>
          </div>

        </div>
        <div className="bg-white opacity-5 mt-14 w-full h-0.5">
        </div>
        <h1 className="text-white text-center mx-auto text-xl mt-10 font-bold">Learn more about us</h1>

        <div className="flex justify-center mt-8">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Ah_uuTwGOYU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>






      </div>





    </>


  );
}
