
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      type: "Speed Alert",
      message: "Vehicle exceeded speed limit (90 km/h)",
      location: "Highway 101",
      timestamp: "2 minutes ago",
      severity: "high",
      status: "new"
    },
    {
      id: 2,
      type: "Geo-fence",
      message: "Vehicle exited work zone",
      location: "Office Building",
      timestamp: "15 minutes ago",
      severity: "medium",
      status: "acknowledged"
    },
    {
      id: 3,
      type: "Motion Detected",
      message: "Vehicle movement detected while parked",
      location: "Home Driveway",
      timestamp: "1 hour ago",
      severity: "high",
      status: "new"
    },
    {
      id: 4,
      type: "Battery Warning",
      message: "Device battery level below 20%",
      location: "Current Location",
      timestamp: "2 hours ago",
      severity: "medium",
      status: "resolved"
    },
    {
      id: 5,
      type: "Offline Status",
      message: "Vehicle tracker went offline",
      location: "Unknown",
      timestamp: "3 hours ago",
      severity: "high",
      status: "resolved"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'new': return 'destructive';
      case 'acknowledged': return 'default';
      case 'resolved': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Alert Notifications</h1>
          <p className="text-gray-600 mt-1">Monitor and manage vehicle security alerts</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            Mark All Read
          </Button>
          <Button className="bg-trutrack-blue hover:bg-trutrack-blue/90">
            <Bell className="w-4 h-4 mr-2" />
            Alert Settings
          </Button>
        </div>
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-l-4 border-l-red-500">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">3</div>
            <p className="text-sm text-gray-600">High Priority</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-yellow-500">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <p className="text-sm text-gray-600">Medium Priority</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-trutrack-green">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-trutrack-green">2</div>
            <p className="text-sm text-gray-600">Resolved</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-trutrack-blue">
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-trutrack-blue">7</div>
            <p className="text-sm text-gray-600">Total Today</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <span>Recent Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <div className={`w-3 h-3 rounded-full mt-2 ${getSeverityColor(alert.severity)}`} />
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">{alert.type}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge variant={getStatusVariant(alert.status)}>
                        {alert.status}
                      </Badge>
                      <span className="text-sm text-gray-500">{alert.timestamp}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-2">{alert.message}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">📍 {alert.location}</span>
                    <div className="flex space-x-2">
                      {alert.status === 'new' && (
                        <>
                          <Button variant="outline" size="sm">
                            Acknowledge
                          </Button>
                          <Button variant="outline" size="sm" className="text-trutrack-blue">
                            View Details
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alert Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Alert Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Speed Alerts</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Speed limit exceeded</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Sudden acceleration</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Hard braking</span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Security Alerts</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Motion detection</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Geo-fence breaches</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Device tampering</span>
                </label>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">System Alerts</h4>
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Low battery</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Offline status</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm">Connection issues</span>
                </label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;
