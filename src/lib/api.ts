// src/lib/api.ts
export async function getProperties() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const res = await fetch(`${baseUrl}/api/properties`, {
    cache: 'no-store',
  })

  if (!res.ok) throw new Error('Failed to fetch properties')

  return res.json()
}
