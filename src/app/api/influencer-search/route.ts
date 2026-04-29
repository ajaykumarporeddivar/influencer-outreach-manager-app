import { INFLUENCER METADATA, INFLUENCER PROFILES } from '@/lib/data'

export async function GET(request: Request): Promise<Response> {
  const { query } = await request.url.searchParams
  const type = request.url.searchParams.get('type')

  const result = INFLUENCER PROFILES.filter((influencer) => {
    if (!query) {
      return true
    }
    return (
      influencer.name.toLowerCase().includes(query.toLowerCase()) ||
      influencer.description.toLowerCase().includes(query.toLowerCase())
    )
  })

  if (type && type === 'metadata') {
    return Response.json({
      ok: true,
      data: INFLUENCER METADATA,
      stats: { total: 10, count: 10, avg: 5 },
    })
  }

  return Response.json({
    ok: true,
    data: { results: result.slice(0, 20), total: result.length, query: query },
  })
}

export async function OPTIONS(): Promise<Response> {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}