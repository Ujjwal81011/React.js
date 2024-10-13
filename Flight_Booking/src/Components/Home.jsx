import React from 'react'
import video from "../assets/Video.mp4"
import image from "../assets/TakeOff.png"

function Home() {
  return (
    <div className='flex-col text-center pt-20'>
        <div>
            <h1 className='text-4xl font-bold'>Create Ever-lasting Memories With Us</h1>
        </div>

        <div className='flex w-full my-10 justify-center items-center '>

            <div className='w-3/5'>
                <video src={video} autoPlay muted loop className='rounded-full flex items-center justify-center'></video>
            </div>

            <img src={image} alt="plane" className='absolute contain flex items-center justify-center'/>
        </div>
    </div>
  )
}

export default Home