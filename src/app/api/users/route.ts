export async function GET(): Promise<Response> {
  return Response.json({
    ok: true,
    data: [
      { id: 'user-1', firstName: 'Emily', lastName: 'Thompson', email: 'emily.thompson@influencer-outreach-manager.com' },
      { id: 'user-2', firstName: 'David', lastName: 'Lee', email: 'david.lee@influencer-outreach-manager.com' },
    ],
    stats: { total: 2, count: 2, avg: 2 },
  })
}

export async function POST(): Promise<Response> {
  const body = await request.body.json()
  return Response.json({
    ok: true,
    message: 'Demo mode — user data not persisted',
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