
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import VehicleStats from "@/components/VehicleStats";
import QuickMap from "@/components/QuickMap";

const DashboardOverview = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your vehicle status</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            View All Alerts
          </Button>
          <Button className="bg-trutrack-blue hover:bg-trutrack-blue/90">
            Live Tracking
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-l-4 border-l-trutrack-blue">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Devices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">2</div>
            <div className="flex items-center space-x-2 mt-2">
              <Badge variant="secondary" className="bg-trutrack-green/10 text-trutrack-green">
                Online
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-trutrack-green">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Distance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,247 km</div>
            <p className="text-sm text-gray-600 mt-2">This month</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3</div>
            <p className="text-sm text-gray-600 mt-2">Needs attention</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Speed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">45 km/h</div>
            <p className="text-sm text-gray-600 mt-2">Last 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Vehicle Stats - Takes 2 columns */}
        <div className="lg:col-span-2">
          <VehicleStats />
        </div>

        {/* Quick Map - Takes 1 column */}
        <div>
          <QuickMap />
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { time: "2 minutes ago", event: "Vehicle started", location: "Home", type: "info" },
              { time: "15 minutes ago", event: "Geo-fence exited", location: "Work Zone", type: "warning" },
              { time: "1 hour ago", event: "Vehicle parked", location: "Shopping Mall", type: "info" },
              { time: "3 hours ago", event: "Speed limit exceeded", location: "Highway 101", type: "alert" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    activity.type === 'alert' ? 'bg-red-500' : 
                    activity.type === 'warning' ? 'bg-yellow-500' : 'bg-trutrack-green'
                  }`} />
                  <div>
                    <p className="font-medium text-gray-900">{activity.event}</p>
                    <p className="text-sm text-gray-600">{activity.location}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
