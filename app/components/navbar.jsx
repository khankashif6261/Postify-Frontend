'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center sticky top-0 z-50 bg-white/30 backdrop-blur-md px-4 py-2'>

      {/* LOGO */}
      <div className='ml-2 sm:ml-5 cursor-pointer text-[#3ab299] font-bold text-xl sm:text-2xl self-center'>
        <Link href={`/home`}>Postify</Link>
      </div>

      {/* HAMBURGER */}
      <div
        className='sm:hidden flex flex-col cursor-pointer mr-2'
        onClick={() => setOpen(!open)}
      >
        <span className='w-6 h-0.5 bg-black mb-1'></span>
        <span className='w-6 h-0.5 bg-black mb-1'></span>
        <span className='w-6 h-0.5 bg-black'></span>
      </div>

      {/* MENU */}
      <ul
        className={`
          absolute sm:static
          top-14 left-0 w-full sm:w-auto
          bg-white sm:bg-transparent
          flex flex-col sm:flex-row
          gap-6 sm:gap-20
          items-center
          py-6 sm:py-0
          transition-all duration-300
          ${open ? 'block' : 'hidden sm:flex'}
        `}
      >

        <li className='cursor-pointer text-zinc-800 hover:text-[#3ab299]'>
          <Link href='/home'>Home</Link>
        </li>

        <li className='cursor-pointer text-zinc-800 hover:text-[#3ab299]'>
          <Link href='/explore'>Explore</Link>
        </li>

        <li className='cursor-pointer text-zinc-800 hover:text-[#3ab299]'>
          <Link href='/AboutUs'>About Us</Link>
        </li>

        <li className='cursor-pointer text-zinc-800 hover:text-[#3ab299]'>
          <Link href='/ContactUs'>Contact Us</Link>
        </li>

        <Link href={`/profile`}>
          <div>
            <img
              src='/profile.svg'
              className='cursor-pointer h-9 w-9 sm:h-10 sm:w-10 sm:mr-5'
            />
          </div>
        </Link>

      </ul>
    </nav>
  )
}

export default navbar
