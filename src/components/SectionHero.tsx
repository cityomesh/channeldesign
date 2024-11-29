'use client'
import React, { useState } from 'react'
import { FaBars, FaChevronDown, FaTimes, FaUserCircle } from 'react-icons/fa'
import { FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'

function ABC() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false)

  function ToggleMenu(): void {
    setMenuOpen(!menuOpen)
  }

  function ToggleServices(): void {
    setIsServicesOpen(!isServicesOpen)
  }

  return (
    <div>
      <header className='relative'>
        <nav className='bg-[#FFFF] text-black flex justify-between px-[50px] py-2'>
          <div>
            <img
              src='logo.jpeg'
              height={50}
              width={70}
              alt='Logo'
            />
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden w-full h-screen fixed top-[60px] right-0 bg-white flex flex-col text-lg font-sans left-0 transition-transform duration-500 ease-in-out mt-6`}>
            <ul className='text-gray-600 font-semibold'>
              <li className='border-b-2 border-gray-300 px-3 py-1 hover:text-red-400'>Hospitals</li>
              <li className='border-b-2 border-gray-300 px-3 py-1 hover:text-red-400'>Specialities</li>
              <li className='border-b-2 border-gray-300 px-3 py-1 hover:text-red-400'>Clinics</li>
              <li className='border-b-2 border-gray-300 px-3 py-1 hover:text-red-400'>Doctors</li>

              {/* Services with Toggle */}
              <li className='border-b-2 border-gray-300 px-3 py-1 hover:text-red-400' onClick={ToggleServices}>
                <div className='flex justify-between items-center cursor-pointer'>
                  <span>Services</span>
                  <FaChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`} />
                </div>
                {isServicesOpen && (
                  <ul className='mt-2 pl-4'>
                    <li className='py-1'>My Health Plus</li>
                    <li className='py-1'>International Consultant</li>
                    <li className='py-1'>Air Ambulance</li>
                    <li className='py-1'>Book Consult</li>
                    <li className='py-1'>Book Tests</li>
                    <li className='py-1'>Order Medicines</li>
                    <li className='py-1'>Homecare services</li>
                    <li className='py-1'>Care Packages</li>
                    <li className='py-1'>Purchase Device</li>
                  </ul>
                )}
              </li>

              <li className='border-b-2 border-gray-300 px-3 py-1 hover:text-red-400'>Blogs</li>
              <li className='border-b-2 border-gray-300 px-3 py-1 hover:text-red-400'>B2B Services</li>
            </ul>
            <div className='mt-4'>
              <div className='lg:flex hidden items-center mb-4'>
                <FaUserCircle />
                <span className='ml-2'>Login</span> | <span>Register</span>
              </div>
              <div className='border-2 p-2 lg:flex justify-between items-center hidden'>
                <FaLocationDot />
                <input type='text' placeholder='Hyderabad' className='outline-none animate-jump' /> {/* Apply animation here */}
                <FaChevronDown />
              </div>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className='lg:hidden flex items-center gap-2'>
            <FaPhoneVolume />
            {menuOpen ? (
              <FaTimes onClick={ToggleMenu} className='cursor-pointer' />
            ) : (
              <FaBars onClick={ToggleMenu} className='cursor-pointer' />
            )}
          </div>

          {/* Large Screen Navigation */}
          <div className='hidden lg:flex items-center justify-between'>
            <ul className='flex items-center gap-6 text-gray-500'>
              <li className='hover:text-red-400 cursor-pointer'>Hospitals</li>
              <li className='hover:text-red-400 cursor-pointer'>Specialities</li>
              <li className='hover:text-red-400 cursor-pointer'>Clinics</li>
              <li className='hover:text-red-400 cursor-pointer'>Doctors</li>

              {/* Services with Dropdown */}
              <li className='relative group'>
                <div className='flex items-center cursor-pointer'>
                  Services <FaChevronDown className='ml-1' />
                </div>
                {/* Dropdown content positioned below the header */}
                <ul className='absolute left-0 mt-1 top-full bg-white border border-gray-300 z-20 hidden group-hover:block w-[200px]'>
                  <li className='px-4 py-2 hover:text-red-400'>My Health Plus</li>
                  <li className='px-4 py-2 hover:text-red-400'>International Consultant</li>
                  <li className='px-4 py-2 hover:text-red-400'>Air Ambulance</li>
                  <li className='px-4 py-2 hover:text-red-400'>Book Consult</li>
                  <li className='px-4 py-2 hover:text-red-400'>Book Tests</li>
                  <li className='px-4 py-2 hover:text-red-400'>Order Medicines</li>
                  <li className='px-4 py-2 hover:text-red-400'>Homecare services</li>
                  <li className='px-4 py-2 hover:text-red-400'>Care Packages</li>
                  <li className='px-4 py-2 hover:text-red-400'>Purchase Device</li>
                </ul>
              </li>

              <li className='hover:text-red-400 cursor-pointer'>Blogs</li>
              <li className='hover:text-red-400 cursor-pointer'>B2B Services</li>
            </ul>

            {/* Login and Location for Desktop */}
            <div className='flex items-center gap-2 ms-2'>
              <FaUserCircle />
              <span className='cursor-pointer'>Login</span>
              <span className='cursor-pointer'>Register</span>
              <div className='flex items-center border-2 p-2'>
                <FaLocationDot />
                <input type='text' placeholder='Hyderabad' className='outline-none animate-jump' /> {/* Apply animation here */}
                <FaChevronDown />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default ABC
