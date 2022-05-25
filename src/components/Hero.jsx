import React from 'react'
import ReactTypingEffect from 'react-typing-effect'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl'>fast, flexible financig for</p>
                <ReactTypingEffect 
                    className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
                    text={["Tiffani.", "Rengifo"]}
                    speed={100}
                    displayTextRenderer={(text, i) => {
                        return (
                          <h1>
                            {text.split('').map((char, i) => {
                              const key = `${i}`;
                              return (
                                <span
                                  key={key}
                                  style={i/2 === 0 ? { color: '#00df9a'} : {}}
                                >{char}</span>
                              );
                            })}
                          </h1>
                        );
                      }}    
                />
            </div>
            <p className='mt-4 md:text-2xl text-xl font-bold text-gray-500 sm:px-2'>Monitor your data nalytics to increase for BTB, BTC, & SASS platforms. Lorem</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero