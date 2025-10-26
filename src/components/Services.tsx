import React from 'react'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { FaHome, FaHandshake, FaBuilding, FaChartLine } from "react-icons/fa";


const Services = () => {

const servicesData = [
    {
        title: 'Property Listings & Search',
        description: 'Explore verified homes, apartments, and lands tailored to your budget and lifestyle.',
        icon: <FaHome className="text-[var(--primary-green500)] text-3xl" /> ,
    },
    {
        title: 'Buying & Selling Assistance',
        description: 'We connect buyers and sellers for smooth, secure, and stress-free transactions.',
        icon: <FaHandshake className="text-[var(--primary-green500)] text-3xl" /> ,
    },
    {
        title: 'Property Management',
        description: 'Simplify ownership with expert tenant, rent, and maintenance management.',
        icon: <FaBuilding className="text-[var(--primary-green500)] text-3xl" /> ,
    },
    {
        title: 'Advisory & Investment Services',
        description: 'Get trusted insights to grow your real estate portfolio with confidence.',
        icon: <FaChartLine className="text-[var(--primary-green500)] text-3xl" />,
    },


]


  return (
    <div id='Services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 '>

        
        <Title title='How can we help?' desc='From strategy to execution, we simplify real estate decisions with insight, precision, and trust.'/>

        <div className=' flex flex-col md:grid grid-cols-2 '>
            {servicesData.map((service, index)=>(
                <ServiceCard key= {index} service={service} index={index}/>
            ))}

        </div>
        
        </div>
  )
}

export default Services