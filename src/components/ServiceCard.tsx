"use client"
import React, { useState, useRef } from 'react'

interface Service {
  icon: React.JSX.Element;
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({service, index}) => {
  const [position, setPosition] = useState<{x: number, y: number}>({x: 0, y: 0})
  const [visible, setVisible] = useState<boolean>(false);
  const divRef = useRef<HTMLDivElement>(null)
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({x: e.clientX - bounds.left, y: e.clientY - bounds.top})
  }
  
  return (
    <div 
      className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-200 shadow-2xl shadow-gray-100 dark:shadow-white/10' 
      onMouseEnter={() => setVisible(true)} 
      onMouseLeave={() => setVisible(false)} 
      ref={divRef} 
      onMouseMove={handleMouseMove}
    >
      <div 
        className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-[var(--primary-green500)] to-[#4ade80] w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${visible ? 'opacity-70' : 'opacity-0'}`} 
        style={{ top: position.y - 150, left: position.x - 150}} 
      />
      <div className='flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white z-10 relative'>
        <div className='bg-gray-100 rounded-full'>
          <div className='max-w-24 bg-white  rounded-full m-2'>{service.icon}</div>
        </div>
        <div className='flex-1'>
          <h3 className='font-bold'>{service.title}</h3>
          <p className='text-sm mt-2'>{service.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard