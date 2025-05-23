import Contents from "@/components/ui/Contents";
import SideBar from "@/components/ui/Sidebar";
import { Layout } from "antd";
// Super Admin Layout
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
