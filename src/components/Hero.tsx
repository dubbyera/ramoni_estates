import React from 'react'
import Image from 'next/image'

const avatars= [
    "/assets/group_profile.png",
    "/assets/group_profile.png",
    "/assets/group_profile.png",
    "/assets/group_profile.png",
]
const Hero = () => {
  return (
    <div id="hero" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700">

        <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
            <div>
                {}
            </div>
            <img className="w-20" src="/assets/group_profile.png" alt=""
            />
           <p className='text-xs font-medium'>Trusted by 50k people</p>
        </div>
        
        

            <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Connecting people with <span className='bg-gradient-to-r from-[var(--primary-green500)] to-[#4ade80] bg-clip-text text-transparent'>perfect</span> homes.</h1>

            <p className='text-sm sm:text-lg font-medium text-gray-500 max-w-4/5 sm:max-w-lg pb-3'>Discover homes, connect with agents, and make confident decisions with one trusted real estate partner.</p>

            <div>

                <div className='relative'>
                    <img src="/assets/house_img.webp" alt="" className='w-full max-w-6xl rounded-full'/>

            

                </div>

            </div>
        



        </div>

       

        
  )
}

export default Hero