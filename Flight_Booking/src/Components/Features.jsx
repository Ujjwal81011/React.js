import React from 'react'

export default function Features() {
  return (
    <div className='flex w-full md:px-[200px] px-8 flex-col gap-16 justify-center items-center'>
        <div className='flex flex-col w-full items-center'>
            <span className='text font-semibold text-sky-800 mt-4'>Our Features</span>
            <span className='md:text-3xl text-2xl font-semibold mt-2'>
                Our Priceless Features
            </span>
            <p className='text-center mt-2 max-w-[400px]'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis molestiae, eius adipisci nam tenetur vel.
            </p>
        </div>
    </div>
  )
}
