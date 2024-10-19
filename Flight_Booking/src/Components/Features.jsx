import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdGlobe } from "react-icons/io";

export default function Features() {
  return (
    <div className='flex w-full md:px-[200px] px-8 flex-col gap-16 justify-center items-center'>
        <div className='flex flex-col w-full items-center'>
            <span className='text font-semibold text-sky-800 mt-4'>Our Features</span>
            <span className='md:text-3xl text-2xl font-semibold mt-2'>
                Our Priceless Features
            </span>
            <p className='text-center mt-2 max-w-[400px]'>
                We provide good facilities to our consumers as per their needs, and never give a chance for complaint.
            </p>
        </div>

        <div className='flex flex-col md:flex-row w-full items-center justify-center gap-5 md:space-x-5'>
            <div className='bg-sky-100 hover:bg-sky-200 py-5 px-12 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 min-h-[300px]'>
                <IoBedOutline className="text-5xl text-blue-500"/>
                <h1 className='text font-bold text-center italic'>Hotels on the House</h1>
                <p className='flex flex-row flex-wrap justify-center text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est hic provident officia dolores tempore repudiandae praesentium ratione ad doloremque beatae?</p>
            </div>

            <div className='bg-sky-100 hover:bg-sky-200 py-5 px-12 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 min-h-[300px]'>
                <VscWorkspaceTrusted className='text-5xl text-blue-500'/>
                <h1 className='text font-bold text-center italic'>Safe to Trust</h1>
                <p className='flex flex-row flex-wrap justify-center text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi culpa nostrum nisi quae earum adipisci voluptatem dignissimos molestiae odit!</p>
            </div>

            <div className='bg-sky-100 hover:bg-sky-200 py-5 px-12 flex flex-col items-center justify-center gap-5 rounded-[10px] transition-all duration-300 min-h-[300px]'>
                <IoMdGlobe className='text-5xl text-blue-500'/>
                <h1 className='text font-bold text-center italic'>World Customers</h1>
                <p className='flex flex-row flex-wrap justify-center text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam voluptas nam voluptatum quas quis neque repellat sed, quasi libero.</p>
            </div>
        </div>
    </div>
  )
}