import React from 'react'

interface FilterProps {
  filters: { status: string; type: string }
  setFilters: (filters: any) => void
}

const FilterSidebar: React.FC<FilterProps> = ({ filters, setFilters }) => {
  return (
    <div className="w-64 p-4 border rounded-xl bg-white h-fit">
      <h2 className="font-semibold mb-4">Filters</h2>

      {/* Status Filter */}
      <div className="mb-4">
        <h3 className="text-gray-700 font-medium mb-2">Status</h3>
        {['For Sale', 'For Rent'].map(status => (
          <label key={status} className="block text-sm text-gray-600">
            <input
              type="radio"
              name="status"
              value={status}
              checked={filters.status === status}
              onChange={() => setFilters({ ...filters, status })}
              className="mr-2"
            />
            {status}
          </label>
        ))}
      </div>

      {/* Type Filter */}
      <div className="mb-4">
        <h3 className="text-gray-700 font-medium mb-2">Property Type</h3>
        {['Apartment', 'Duplex', 'Bungalow'].map(type => (
          <label key={type} className="block text-sm text-gray-600">
            <input
              type="radio"
              name="type"
              value={type}
              checked={filters.type === type}
              onChange={() => setFilters({ ...filters, type })}
              className="mr-2"
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  )
}

export default FilterSidebar
