import React from 'react'
import Photo from '../assets/ujjwal.jpg'

function Hero() {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={Photo} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {""}
            <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>Ujjwal Mishra</span>
            , Front-end Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 px-4 md:px-32'>
            I specialize in building modern and responsive UI applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Contact with Me</button>
            <button className='bg-gradient-to-r from-pink-400 to-yellow-500 text-white hidden md:inline ttransform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              <a href="https://drive.google.com/file/d/1hj5ic68YtP0HkQpKi9IhL2oM-CzQ5WJU/view?usp=drive_link" target='_blank'>Resume</a>
          </button>
        </div>
    </div>
  )
}

export default Hero