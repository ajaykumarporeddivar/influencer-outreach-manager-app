import { BRANDS } from '@/lib/data'

export async function GET(): Promise<Response> {
  return Response.json({
    ok: true,
    data: BRANDS,
    stats: { total: BRANDS.length, count: BRANDS.length, avg: BRANDS.length },
  })
}

export async function POST(): Promise<Response> {
  const body = await request.body.json()
  return Response.json({
    ok: true,
    message: 'Demo mode — brand metadata data not persisted',
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