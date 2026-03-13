import MainNav from "@/components/main-nav";

import SiteFooter from "@/components/site-footer";
import { dashboardConfig } from "@/config/dashboard";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <div>
          <MainNav items={dashboardConfig.mainNav} />
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
