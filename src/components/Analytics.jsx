import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center mx-auto'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Menage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet, consectetur 
                    adipisicing elit. Sapiente eveniet, 
                    laborum, reprehenderit excepturi adipisci 
                    consequuntur ut, ipsa praesentium eligendi 
                    eaque nisi minima. Cum, ex quasi. 
                    Beatae voluptatem voluptatum veniam magnam!
                </p>
                <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
            </div>
        </div> 
    </div>
  )
}

export default Analytics