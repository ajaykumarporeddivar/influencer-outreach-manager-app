'use client'
import {
  DEMO_USER,
  STATS,
  MOCK_INFLUENCER,
  MOCK_CAMPAIGN,
  MOCK_POST,
  RECENT_ACTIVITY,
  CHART_DATA,
  SPARKLINE_DATA,
  formatDate,
  formatCurrency,
} from '@/lib/data';
import {
  StatCard,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Badge,
  Avatar,
  Table,
  Button,
} from '@/components/ui';
import { BarChart, Sparkline } from '@/components/charts';
import AppHeader from '@/components/layout/AppHeader';

const DashboardPage = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout>
      <AppHeader
        title="Dashboard"
        subtitle={`Good morning, ${DEMO_USER.name}`}
        actions={<Button size="sm">+ New Campaign</Button>}
      />

      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 xl:grid-cols-4">
        {STATS.map((stat, index) => (
          <StatCard
            key={index}
            icon={<LucideIcon size={16} />}
            title={stat.title}
            value={stat.value}
            sparkline={<Sparkline data={SPARKLINE_DATA} />}
          />
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 md:-cols-1 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Overall Overview</CardTitle>
            <CardTitle> Last 12 weeks</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={CHART_DATA.weekly} labels={CHART_DATA.labels} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {RECENT_ACTIVITY.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 py-2 border-b border-zinc-50 last:border-0"
                onClick={() => setSelectedRow(activity)}
              >
                <Avatar size={24} src={activity.avatar} />
                <Badge variant="success">{activity.action}</Badge>
                <span>{formatDate(activity.date)}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table
            headers={['Name', 'Status', 'Influencer', 'Created At']}
            rows={[
              MOCK_CAMPAIGN,
              MOCK_CAMPAIGN,
              MOCK_CAMPAIGN,
              MOCK_CAMPAIGN,
              MOCK_CAMPAIGN,
              MOCK_CAMPAIGN,
              MOCK_CAMPAIGN,
              MOCK_CAMPAIGN,
            ]}
            onRowClick={setSelectedRow}
          />
          <div className="flex justify-between py-4">
            <span>Total Campaigns {MOCK_CAMPAIGN.length}</span>
            <Button size="sm" onClick={() => console.log('Export clicked')}>
              Export
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between py-4">
        <div>
          <Button size="sm">New Contract</Button>
          <Button size="sm">Send Invoice</Button>
          <Button size="sm">Run Report</Button>
        </div>
        <div>
          <span> Toast notification will display here</span>
        </div>
      </div>

      <Toast />
    </DashboardLayout>
  );
};

export default DashboardPage;