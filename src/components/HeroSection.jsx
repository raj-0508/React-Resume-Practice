import React from 'react'
import personImage from '../assets/person.png'

function HeroSection() {
  return (
        <main className="flex flex-wrap justify-center items-center gap-2 px-8 mt-6 ">
                <img src={personImage} alt="" className='width-full h-auto max-w-[600px] object-cover' />
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl text-[#c91b28] font-semibold'>Hello, I'm Arthur</h1>
                <h2 className='text-5xl md:text-6xl font-semibold'>Visual Designer</h2>
                <p className='text-lg text-[#cecece] mt-1.5 font-semibold'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Explicabo delectus numquam quam incidunt? Eius <br />
                    Suscipit, provident! consectetur adipisicing
                </p>
                <button className='bg-[#f83241] border-none text-white w-[150px] p-4 mt-8 text-xl font-semibold cursor-pointer'>ABOUT ME</button>
            </div>
        </main>
  )
}

export default HeroSection
