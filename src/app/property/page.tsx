import React from 'react'
import { getProperties } from '@/lib/api'
import PropertyCard from '@/components/PropertyCard'

const PropertiesPage = async () => {
  const properties = await getProperties()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.map((property: any) => (
        <PropertyCard
          key={property.id}
          property={{
            id: property.id,
            title: property.title || 'Untitled Property',
            type: property.type || 'House',
            location: property.location || 'Unknown Location',
            price: property.price || 0,
            image: property.image || '/fallback.jpg',
            bedrooms: property.bedrooms || 0,
            bathrooms: property.bathrooms || 0,
            status: property.status || 'For Sale',
          }}
        />
      ))}
    </div>
  )
}

export default PropertiesPage
