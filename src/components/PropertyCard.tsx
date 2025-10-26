import React from 'react'


interface Property {
  id: number
  title: string
  type: string
  location: string

  image: string
  bedrooms: number
  bathrooms: number
  status: string
}


interface PropertyCardProps {
  property: Property
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  if (!property) return null

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl transition-all overflow-hidden cursor-pointer ">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg pb-2">{property.title}</h3>
        <p className="text-gray-500 text-sm">{property.location}</p>
        <p className="text-green-600 font-semibold mt-2">
         
        </p>
        <div className="flex justify-between text-sm text-gray-600 mt-2">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.status}</span>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
