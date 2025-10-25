import { NextResponse } from 'next/server'

export async function GET() {
  const url = 'https://realty-in-us.p.rapidapi.com/properties/v3/list'

  const body = {
    limit: 15,
    offset: 0,
    postal_code: '90004',
    status: ['for_sale', 'ready_to_build'],
    sort: { direction: 'desc', field: 'list_date' },
  }

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'realty-in-us.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
    },
    body: JSON.stringify(body),
  }

  // Some sample Nigerian-style property names
  const nigerianTitles = [
    'Lekki Pearl Apartments',
    'Banana Island Luxury Villa',
    'Victoria Crest Duplex',
    'Ikoyi Signature Residence',
    'Eko Atlantic Towers',
    'Chevron Garden Homes',
    'Abuja Royal Terrace',
    'Maitama Elite Suites',
    'Surulere Family Bungalow',
    'Ikeja Orchid Apartments',
    'Ajah Emerald Court',
    'Osapa London Heights',
    'Magodo Classic Homes',
    'Gwarinpa Serenity Villa',
    'Festac Prime Estate',
  ]

  try {
    const res = await fetch(url, options)
    if (!res.ok) throw new Error('Failed to fetch properties')

    const data = await res.json()

    const properties =
      data.data?.home_search?.results?.map((p: any, i: number) => ({
        id: i + 1,
        title: nigerianTitles[i % nigerianTitles.length],
        type: p.description?.type || 'House',
        location: `${p.location?.address?.line || ''}, ${p.location?.address?.city || ''}`,
       image:
        p.primary_photo?.href
        ?.replace('sm.', 'xl.')
        ?.replace('thumb', 'xl') ||
        'https://images.unsplash.com/photo-1560185127-6ed189bf02ec?w=800&q=80',

        bedrooms: p.description?.beds || 0,
        bathrooms: p.description?.baths || 0,
        status: p.status?.replace('_', ' ') || 'unknown',
      })) || []

    return NextResponse.json(properties)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
