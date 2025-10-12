import React from 'react'
import { LuHouse } from 'react-icons/lu'
import { FaXTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className='px-4 sm:px-12 lg:px-24 xl:px-40 font-sm'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:py-4 sm'>
        <div className='text-sm'>
            <div className='flex items-center font-semibold text-lg'>
                      <LuHouse className="text-[var(--primary-green500)] w-7 h-7"/>
                      <span className='px-1'><a href="#">Ramoni Estates</a></span>
                     </div>
                <p className='py-4 w-full'>&#34; Discover the art of refined living. &#34;</p>
            
        </div>

        <div className=''>
            <h2 className='font-semibold'>Company & Services</h2>

            <ul className='flex flex-col text-sm py-4'>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">About Us</a>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Services</a>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Buy</a>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Rent</a>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Sell</a>
            </ul>

        </div>

        <div className=''>
        <h2 className='font-semibold'>Legal</h2>
        
        <ul className='flex flex-col text-sm py-4'>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Terms and Conditions</a>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Privacy Policy</a>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Cookie Policy</a>
            <a className= "py-2 hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">Acceptable Use Policy</a>
            </ul>


        </div>

        <div className=''>
            <h2 className='font-semibold'>Contact Us</h2>

            <ul className='flex flex-col text-sm py-5'>
            <a className= "text-sm hover:text-[var(--primary-green500)] active:text-[var(--primary-green500)] focus:text-[var(--primary-green500)]" href="#">dubemobi203@gmail.com</a>
            </ul>


         <ul className='flex gap-4 text-xl'>
         <a href="#" className="text-[var(--primary-green500)] transition-colors">
            <FaXTwitter />
            </a>
            <a href="#" className="text-[var(--primary-green500)] transition-colors">
            <FaInstagram />
            </a>
            <a href="#" className="text-[var(--primary-green500)] transition-colors">
            <FaFacebookF />
        </a>
        </ul>
    

        </div>
      

        </div>

    
            <div className='pt-4'>
            <div className='border-t border-gray-300'/>

                    <p className=' text-sm text-center py-5'><span className="text-[var(--primary-green500)]">©</span> 2025 Ramoni Estates. All rights reserved.</p>
            </div>
            
        


    </footer>
  )
}

export default Footer