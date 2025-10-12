'use client'
import React, { useState } from 'react'
import { LuHouse } from 'react-icons/lu'
import { FiSearch } from 'react-icons/fi'

// Keep your header markup mostly unchanged
export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* ========== HEADER (your original navbar) ========== */}
      <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-30 backdrop-blur-xl font-medium bg-white/50 border-b border-gray-100">
        <div className='flex items-center font-semibold text-lg'>
          <LuHouse className="text-[var(--primary-green500)] w-7 h-7"/>
          <span className='px-1'><a href="#">Ramoni Estates</a></span>
        </div>

        {/* Desktop nav - keep this if you already have it */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#" className="hover:text-[var(--primary-green500)]">About Us</a>
          <a href="#" className="hover:text-[var(--primary-green500)]">Services</a>
           <a href="#" className="hover:text-[var(--primary-green500)]">Buy</a>
          <a href="#" className="hover:text-[var(--primary-green500)]">Rent</a>
          <a href="#" className="hover:text-[var(--primary-green500)]">Sell</a>
        </div>

        {/* Right: hamburger (mobile) + Sign in */}
        <div className='flex items-center gap-2 sm:gap-4'>
          <img
            src="/assets/menu_icon.svg"
            alt="menu-icon"
            className="w-8 sm:hidden cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
          <a href="#" className='text-sm max-sm:hidden flex items-center gap-2 bg-[var(--primary-green500)] text-white px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all'> 
            Search <FiSearch className="w-4 h-4 text-white rotate-90" />  
          </a>

        </div>
      </div>

      {/* ========== OVERLAY (sibling of header) ========== */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 sm:hidden
          ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden={!sidebarOpen}
      />

      {/* ========== SIDEBAR (sibling of header) ========== */}
      <div
        className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-[var(--primary-green500)] text-white z-50 transform transition-transform duration-300 ease-in-out sm:hidden
          ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!sidebarOpen}
      >
        <img
          src="/assets/close_icon.svg"
          alt="close"
          className="w-5 absolute right-4 top-4 cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <nav className="flex flex-col gap-6 pt-20 px-6">
          <a onClick={() => setSidebarOpen(false)} href="#" className="text-lg">About Us</a>
          <a onClick={() => setSidebarOpen(false)} href="#" className="text-lg">Services</a>
          <a onClick={() => setSidebarOpen(false)} href="#" className="text-lg">Buy</a>
          <a onClick={() => setSidebarOpen(false)} href="#" className="text-lg">Rent</a>
          <a onClick={() => setSidebarOpen(false)} href="#" className="text-lg">Sell</a>

          <a onClick={() => setSidebarOpen(false)} href="#" className="mt-auto bg-white text-[var(--primary-green500)] px-6 py-2 rounded-full text-center font-medium">
            Search
          </a>
        </nav>
      </div>
    </>
  )
}
