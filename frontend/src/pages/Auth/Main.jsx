import React, { useState } from 'react'
import Auth from './Auth'
import Otp from './Otp'

function Main() {

  const [page, setPage] = useState("auth")
  const checkPage = (page) => {
    setPage(page)
  }

  return (
    <div className='w-full h-[100vh] flex flex-col  lg:flex-row font-inter justify-between'>
      <section className='leftAuth flex flex-col lg:flex-row relative h-full w-full lg:w-[45%] bg-gradient-to-t from-[#1A5C3D] via-[#56A573] to-[#A5D6A7]'>

        {/* Background Layers */}
        <div className='absolute top-0 left-0 w-full h-[40vh] md:h-[50vh] lg:h-full bg-[#1A5C3D80] rounded-b-full lg:rounded-r-full z-10'></div>
        <div className='absolute top-0 left-0 w-full h-[35vh] md:h-[45vh] lg:h-full bg-[#56A57388] rounded-b-full lg:rounded-r-full z-20'></div>
        <div className='absolute top-0 left-0 w-full h-[30vh] md:h-[40vh] lg:h-full bg-[#A5D6A79a] rounded-b-full lg:rounded-r-full z-30'></div>

        {/* Centered Content */}
        <div className='relative z-40 flex flex-col justify-center items-center w-full h-full px-6'>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-6 text-center'>
            Empower Your Data, Secure Your Files
          </h1>
          <p className='text-white text-lg font-light text-center mb-6'>
            Your data is in safe hands. Begin organizing and managing your files effortlessly today!
          </p>
        </div>
      </section>



      {
        page === "auth" ? <Auth check={checkPage} /> : <Otp check={checkPage} />
      }

    </div>
  )
}

export default Main