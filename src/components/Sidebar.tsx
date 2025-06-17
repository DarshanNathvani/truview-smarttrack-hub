
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  BarChart, 
  Bell, 
  Clock, 
  Map, 
  User,
  RefreshCcw,
  Plus
} from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Sidebar = ({ activeTab, setActiveTab, onLogout }: SidebarProps) => {
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: BarChart },
    { id: "map", label: "Live Map", icon: Map },
    { id: "geofencing", label: "Geo-Fencing", icon: Map },
    { id: "history", label: "History", icon: Clock },
    { id: "analytics", label: "Analytics", icon: BarChart },
    { id: "alerts", label: "Alerts", icon: Bell },
    { id: "devices", label: "Devices", icon: RefreshCcw },
    { id: "support", label: "Support", icon: User },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-trutrack-blue to-trutrack-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">TruTrack</h1>
            <p className="text-sm text-gray-600">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors",
                activeTab === item.id
                  ? "bg-trutrack-blue text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        <Button className="w-full bg-trutrack-green hover:bg-trutrack-green/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Device
        </Button>
        <Button variant="outline" className="w-full">
          <RefreshCcw className="w-4 h-4 mr-2" />
          Refresh Data
        </Button>
        <Button variant="ghost" onClick={onLogout} className="w-full text-gray-600">
          Sign Out
        </Button>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-gray-500 border-t border-gray-200">
        © 2025 TruVibe | TruTrack
      </div>
    </div>
  );
};

export default Sidebar;
