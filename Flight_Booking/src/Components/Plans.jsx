import React from 'react'
import plane1 from "../assets/Charter.jpg"
import plane2 from "../assets/Helicopter.webp"
import plane3 from "../assets/Private plane.jpg"
import { IoIosStar } from "react-icons/io";



function Plans() {
  return (
    <div className="flex w-full pt-5 pb-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center">
        <div className="flex flex-col w-full items-center">
            <span className="font-semibold text-blue-500 text-xl">Our Plans</span>
            <span className="font-bold text-3xl text-slate-700 mt-1">Flights For Everyone</span>
            <p className="text-center max-w-[400px] mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi odio debitis, vel dolor labore.
            </p>
        </div>

        {/* Responsive Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
            {/* Card 1 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <img src={plane1} alt="Private Charter Jet" className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" />
            <div className="flex items-center mt-3">
                <h1 className="font-semibold text-lg md:text-xl text-gray-800">Private Charter Jet</h1>
                <div className="flex items-center ml-2">
                    <IoIosStar className='text-xl text-blue-500 mr-1' />
                    <IoIosStar className='text-xl text-blue-500 mr-1' />
                    <IoIosStar className='text-xl text-blue-500 mr-1' />
                    <IoIosStar className='text-xl text-blue-500 mr-1' />
                    <IoIosStar className='text-xl text-blue-500' />
                </div>
            </div>
            <h1 className='text-gray-500 text-lg mt-[2px] px-4'>Charter B1732</h1>
            <p className="text-gray-600 text-lg mt-2 px-4 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime animi numquam inventore illum amet iure, consequatur recusandae veniam officiis cum.</p>
            <h1 className='text-2xl font-bold mt-3'>
                {""}
                <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>$270 </span>/Hours
            </h1>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <img src={plane2} alt="Helicopter" className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" />
                <div className="flex items-center mt-3">
                    <h1 className="font-semibold text-lg md:text-xl text-gray-800">Helicopter Booking</h1>
                    <div className="flex items-center ml-2">
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500' />
                    </div>
                </div>
                <h1 className='text-gray-500 text-lg mt-[2px] px-4'>Charter B1732</h1>
                <p className="text-gray-600 text-lg mt-2 px-4 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae asperiores animi quas magnam iure? Minima tempore tempora asperiores molestiae blanditiis.</p>
                <h1 className='text-2xl font-bold mt-3'>
                    {""}
                    <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>$270 </span>/Hours
                </h1>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
                <img src={plane3} alt="Private Plane" className="w-full h-[200px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105" />
                <div className="flex items-center mt-3">
                    <h1 className="font-semibold text-lg md:text-xl text-gray-800">Private Plane</h1>
                    <div className="flex items-center ml-2">
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500 mr-1' />
                        <IoIosStar className='text-xl text-blue-500' />
                    </div>
                </div>
                <h1 className='text-gray-500 text-lg mt-[2px] px-4'>Charter B1732</h1>
                <p className="text-gray-600 text-lg mt-2 px-4 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae veritatis accusamus ratione delectus accusantium tenetur similique nesciunt aliquam inventore possimus?</p>
                <h1 className='text-2xl font-bold mt-3'>
                    {""}
                    <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>$270 </span>/Hours
                </h1>
                <button></button>
            </div>
        </div>
    </div>
    
  )
}
export default Plans