'use client'
import { useParams } from 'next/navigation'

import { Card, CardHeader, CardContent, StatCard, Button, Input, Modal } from '@/components/ui'
import { MOCK_CAMPAIGNS, MOCK_INVLISTS, MOCK_INVLIST CampaignDetail} from '@/lib/data'

const params = useParams()
const slug = (params.feature as string) ?? ''

if (!slug) {
  return (
    <div className="flex flex-col gap-y-4 p-4 mx-auto max-w-md sm:max-w-2xl lg:max-w-3xl">
      <h2 className="text-zinc-900 text-2xl font-bold tracking-tight">Features</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {FORGE_FEATURES.map((feature) => (
          <Card key={feature.slug}>
            <CardHeader>
              <h3 className="font-bold text-zinc-900">{feature.name}</h3>
              <p className="text-zinc-600">{feature.description}</p>
              <Button>Open →</Button>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-400">{feature.description}</p>
              <StatCard title="Campaigns" value={MOCK_CAMPAIGNS.length} />
              <StatCard title="Inflencers" value={MOCK_INVLISTS.length} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} else if (slug === 'campaigns') {
  return (
    <div className="flex flex-col gap-y-4 p-4 mx-auto max-w-md sm:max-w-2xl lg:max-w-3xl">
      <h2 className="text-zinc-900 text-2xl font-bold tracking-tight">Campaigns</h2>
      <Card>
        <CardHeader>
          <h3 className="font-bold text-zinc-900">Campaigns Overview</h3>
          <p className="text-zinc-600">This feature provides a platform for creating and managing influencer marketing campaigns.</p>
          <Button>Open Campaigns</Button>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Feature campaign creation and management</li>
            <li>Utilize a robust and scalable database design</li>
            <li>Implement user authentication and authorization</li>
          </ul>
        </CardContent>
        <hr className="my-4 border-zinc-200" />
        <div className="flex flex-col gap-y-4 p-4">
          <h3 className="text-zinc-900 text-md font-bold">Active Campaigns:</h3>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="py-2">Campaign Name</th>
                <th className="py-2">Status</th>
                <th className="py-2">Created Date</th>
                <th className="py-2">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CAMPAIGNS.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="py-2">{campaign.name}</td>
                  <td className="py-2">{campaign.status}</td>
                  <td className="py-2">{campaign.createdAt}</td>
                  <td className="py-2">{campaign.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
} else {
  return <h2>Feature not found</h2>
}