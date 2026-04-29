'use client'
import AppSidebar from '@/components/layout/AppSidebar';
import AppHeader from '@/components/layout/AppHeader';
import DemoBanner from '@/components/layout/DemoBanner';
import { navItems } from '@/lib/data';

const navItemsArray = navItems.slice(0, 5).map((item) => ({
  icon: <LucideIcon size={16} />,
  label: item.label.toUpperCase(),
  href: `/dashboard/${item.slug}`,
}));

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-zinc-50 pt-9">
      <AppSidebar
        items={navItemsArray}
        projectName="Influencer Outreach Manager"
      />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <DemoBanner />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;