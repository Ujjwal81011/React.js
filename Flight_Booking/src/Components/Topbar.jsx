import React from 'react'
import image from "../assets/Aero.jpg"

function Topbar() {
  return (
    <nav className='sm:px-4 md:px-8 lg:px-8'>
        <div className=' py-1 flex justify-center md:justify-between items-center'>
            <div>
                <img src={image} alt="Aero" className='h-14 w-24'/>
            </div>
            <div className='space-x-3 flex md:space-x-6 lg:space-x-6'>
                <a href="#" className='hover:text-gray-600'>Home</a>
                <a href="#" className='hover:text-gray-600'>About</a>
                <a href="#" className='hover:text-gray-600'>Offers</a>
                <a href="#" className='hover:text-gray-600'>Seats</a>
                <a href="#" className='hover:text-gray-600'>Destinations</a>
            </div>
            <button className=' bg-zinc-800 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              <a href="#" target='_blank'>Contact</a>
            </button>
        </div>
    </nav>
  )
}

export default Topbar