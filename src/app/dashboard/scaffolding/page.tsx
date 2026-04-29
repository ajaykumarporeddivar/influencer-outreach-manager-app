'use client'
import { useParams } from 'next/navigation'

import { Card, CardHeader, CardContent, StatCard, Button } from '@/components/ui'
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
} else if (slug === 'scaffolding') {
  return (
    <div className="flex flex-col gap-y-4 p-4 mx-auto max-w-md sm:max-w-2xl lg:max-w-3xl">
      <h2 className="text-zinc-900 text-2xl font-bold tracking-tight">Scaffolding</h2>
      <Card>
        <CardHeader>
          <h3 className="font-bold text-zinc-900">Scaffolding Overview</h3>
          <p className="text-zinc-600">This feature provides a foundation for the Influencer Outreach Manager application.</p>
          <Button>Open Scaffolding</Button>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Run `npx create-next-app` with the latest version of Next.js</li>
            <li>Configure tsconfig with strict TypeScript settings</li>
            <li>Setup Tailwind CSS and lucide-react icons</li>
            <li>Create a `src` directory with `components`, `context`, `models`, and `pages`</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
} else if (slug === 'user-authentication') {
  return (
    <div className="flex flex-col gap-y-4 p-4 mx-auto max-w-md sm:max-w-2xl lg:max-w-3xl">
      <h2 className="text-zinc-900 text-2xl font-bold tracking-tight">User Authentication</h2>
      <Card>
        <CardHeader>
          <h3 className="font-bold text-zinc-900">User Authentication Overview</h3>
          <p className="text-zinc-600">This feature provides secure authentication for users.</p>
          <Button>Open User Auth</Button>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>Implement user registration and login functionality</li>
            <li>Utilize a secure password hashing algorithm</li>
            <li>Implement password recovery and forgot password functionality</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
} else {
  return <h2>Feature not found</h2>
}