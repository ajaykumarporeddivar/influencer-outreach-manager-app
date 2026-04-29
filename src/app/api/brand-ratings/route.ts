import { BRAND RATINGS } from '@/lib/data'

export async function GET(): Promise<Response> {
  return Response.json({
    ok: true,
    data: BRAND RATINGS,
    stats: {
      total: BRAND RATINGS.length,
      count: BRAND RATINGS.length,
      avg: BRAND RATINGS.reduce((a, b) => a + b.stars, 0) / BRAND RATINGS.length,
    },
  })
}

export async function POST(): Promise<Response> {
  const body = await request.body.json()
  return Response.json({
    ok: true,
    message: 'Demo mode — brand rating data not persisted',
    received: body,
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