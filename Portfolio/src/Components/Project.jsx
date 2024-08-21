import React from 'react'

function Project() {
  return (
    <>
        <div className='bg-black text-white py-20' id='project'>
          <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 bg-gradient-to-l  from-pink-400 to-yellow-500 text-transparent bg-clip-text'>My Projects</h2>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3'>
              <div className='bg-gray-800 rounded-lg px-6 pb-6 hover: shadow-lg transform transition-transform hover:scale-105 duration-300'>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Project