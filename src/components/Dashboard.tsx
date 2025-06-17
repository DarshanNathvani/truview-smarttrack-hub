
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import DashboardOverview from "@/components/DashboardOverview";
import LiveMap from "@/components/LiveMap";
import GeoFencing from "@/components/GeoFencing";
import History from "@/components/History";
import Analytics from "@/components/Analytics";
import Alerts from "@/components/Alerts";
import DeviceManagement from "@/components/DeviceManagement";
import Support from "@/components/Support";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard = ({ onLogout }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <DashboardOverview />;
      case "map":
        return <LiveMap />;
      case "geofencing":
        return <GeoFencing />;
      case "history":
        return <History />;
      case "analytics":
        return <Analytics />;
      case "alerts":
        return <Alerts />;
      case "devices":
        return <DeviceManagement />;
      case "support":
        return <Support />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
